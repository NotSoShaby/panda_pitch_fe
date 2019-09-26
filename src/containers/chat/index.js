import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chat from './chat';
import WebSocketInstance from './websocket';
import { createChannel, getAllChannels, getChannelByChannelId } from '../../redux/actions/chat';
import { logout, getLoggedInUserProfile } from '../../redux/actions/login';


const username = 'admin';
const email = 'pr@pr.com';

class Index extends Component {
	constructor(props) {
		super(props);
		const activeChannelId = 1;
		this.state = {
			tabName: 'Latest',
			messages: [],
			activeChannelId,
		};
		const currentUser = username;
		this.waitForSocketConnection(() => {
			WebSocketInstance.addCallbacks(
				this.setMessages.bind(this),
				this.addMessage.bind(this),
				this.handleAuthenticationError.bind(this),
			);
			const { activeChannelId } = this.state;
			WebSocketInstance.sendMessage({ message: 'ping', chatId: activeChannelId, email });
			WebSocketInstance.fetchMessages(currentUser, activeChannelId);
		});

		WebSocketInstance.connect(1);
	}

	static getDerivedStateFromProps(props, state) {
		const { messages } = state;
		const { channel: { data = {} } } = props;
		if (messages.length === 0 && data.messages && messages !== data.mess) {
			return {
				messages: data.messages,
			};
		}
		return null;
	}

	componentDidMount() {
		const { activeChannelId } = this.state;
		WebSocketInstance.connect(activeChannelId);
		const {
			channels, getAllChannels,
		} = this.props;
		if (channels.code !== 'SUCCESS') { getAllChannels(); }
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
		const { message, activeChannelId } = this.state;
		const messageObject = {
			from: 'admin',
			content: message,
			chatId: activeChannelId,
		};
		WebSocketInstance.newChatMessages(messageObject);
		this.setState({ message: '' });
	};

	messageChangeHandler = e => this.setState({ message: e.target.value });

	createNewChat = () => {
		const { createChannel } = this.props;
		const data = {
			participants: ['http://192.168.2.88:8000/api/profile/3/', 'http://192.168.2.88:8000/api/profile/4/'],
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

	onChannelChange = ({ id }) => {
		this.setState({ activeChannelId: id, messages: [] });
		const { getChannelByChannelId } = this.props;
		getChannelByChannelId(id);
		WebSocketInstance.connect(id);
	}

	addMessage(message, user) {
		const { messages, activeChannelId } = this.state;
		const obj = {
			chat: activeChannelId,
			content: message,
			id: messages.length,
			owner: user,
			timestamp: new Date(),
		};
		this.setState({ messages: [...messages, obj] });
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
				{...this.props}
				email={email}
				renderMessages={this.renderMessages}
				messageChangeHandler={this.messageChangeHandler}
				sendMessageHandler={this.sendMessageHandler}
				onTabChange={this.onTabChange}
				handleSearchUser={this.handleSearchUser}
				createNewChat={this.createNewChat}
				onChange={this.onChange}
				sendMessage={this.sendMessageHandler}
				onChannelChange={this.onChannelChange}
			/>
		);
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		createChannel: data => createChannel(data),
		getAllChannels: data => getAllChannels(data),
		getChannelByChannelId: data => getChannelByChannelId(data),
		logout: data => logout(data),
		getLoggedInUserProfile: data => getLoggedInUserProfile(data),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
