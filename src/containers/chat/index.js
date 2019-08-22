import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chat from './chat';
import WebSocketInstance from './websocket';
import { createChannel, getAllChannels } from '../../redux/actions/chat';
import { logout } from '../../redux/actions/login';

const chatID = '1';
const username = 'admin';
const email = 'sakshi.gupta@ongraph.ca';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabName: 'Latest',
			messages: [],
		};
		const currentUser = username;
		this.waitForSocketConnection(() => {
			WebSocketInstance.addCallbacks(
				this.setMessages.bind(this),
				this.addMessage.bind(this),
				this.handleAuthenticationError.bind(this),
			);
			WebSocketInstance.sendMessage({ message: 'ping', chatId: chatID, email });
			WebSocketInstance.fetchMessages(currentUser, chatID);
		});

		WebSocketInstance.connect(1);
	}

	componentDidMount() {
		WebSocketInstance.connect();
		const { getAllChannels } = this.props;
		getAllChannels();
	}

	setMessages(messages) {
		this.setState({ messages: messages.reverse() });
	}

	onTabChange = (tabName) => {
		this.setState({ tabName });
	};

	handleSearchUser = (e) => {
		alert('eeeeeeeeeeeeeeee', e);
	};

	renderMessages = () => {
		const { messages } = this.state;
		const currentUser = username;
		return (
			messages
			&& messages.map(message => (
				<li key={message.id} className={message.author === currentUser ? 'send' : 'replies'}>
					<img
						src="https://icon-library.net/images/my-profile-icon-png/my-profile-icon-png-3.jpg"
						alt="profile-pic"
					/>
					<p>
						{message.content}
						<br />
						<small>{this.renderTimestamp(message.timestamp)}</small>
					</p>
				</li>
			))
		);
	};

	sendMessageHandler = (e) => {
		e.preventDefault();
		const { message } = this.state;
		const messageObject = {
			from: 'admin',
			content: message,
			chatID,
		};
		WebSocketInstance.newChatMessages(messageObject);
		this.setState({ message: '' });
	};

	messageChangeHandler = e => this.setState({ message: e.target.value });

	createNewChat = () => {
		const { createChannel } = this.props;
		const data = {
			participants: ['http://18.191.42.149:8000/api/profile/3/', 'http://18.191.42.149:8000/api/profile/4/'],
		};
		createChannel(data);
	};

	renderTimestamp = (timestamp) => {
		let prefix = '';
		const timeDiff = Math.round((new Date().getTime() - new Date(timestamp).getTime()) / 60000);
		if (timeDiff < 1) {
			// less than one minute ago
			prefix = 'just now...';
		} else if (timeDiff < 60 && timeDiff > 1) {
			// less than sixty minutes ago
			prefix = `${timeDiff} minutes ago`;
		} else if (timeDiff < 24 * 60 && timeDiff > 60) {
			// less than 24 hours ago
			prefix = `${Math.round(timeDiff / 60)} hours ago`;
		} else if (timeDiff < 31 * 24 * 60 && timeDiff > 24 * 60) {
			// less than 7 days ago
			prefix = `${Math.round(timeDiff / (60 * 24))} days ago`;
		} else {
			prefix = `${new Date(timestamp)}`;
		}
		return prefix;
	};


	onChange = e => this.setState({ [e.target.name]: e.target.value });

	addMessage(message) {
		const { messages } = this.state;
		this.setState({ messages: [...messages, message] });
	}

	waitForSocketConnection(callback) {
		const component = this;
		setTimeout(() => {
			if (WebSocketInstance.state() === 1) {
				console.log('connection is secure');
				callback();
				return;
			}
			console.log('waiting for connection...');
			component.waitForSocketConnection(callback);
		}, 100);
	}

	handleAuthenticationError(messages) {
		localStorage.clear();
		const { history, logout } = this.props;
		logout();
		history.push('/login');
		console.log('authentication error', messages);
	}

	render() {
		return (
			<Chat
				{...this.state}
				renderMessages={this.renderMessages}
				messageChangeHandler={this.messageChangeHandler}
				sendMessageHandler={this.sendMessageHandler}
				onTabChange={this.onTabChange}
				handleSearchUser={this.handleSearchUser}
				createNewChat={this.createNewChat}
				onChange={this.onChange}
				sendMessage={this.sendMessageHandler}
			/>
		);
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		createChannel: data => createChannel(data),
		getAllChannels: data => getAllChannels(data),
		logout: data => logout(data),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
