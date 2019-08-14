import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chat from './chat';
import WebSocketInstance from './websocket';

const chatID = '1';
const username = 'admin';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabName: 'Latest',
		};
		const currentUser = username;
		this.waitForSocketConnection(() => {
			WebSocketInstance.addCallbacks(this.setMessages.bind(this), this.addMessage.bind(this));
			WebSocketInstance.fetchMessages(currentUser, chatID);
		});

		WebSocketInstance.connect(1);
	}

	componentDidMount() {
		WebSocketInstance.connect();
	}

	setMessages(messages) {
		this.setState({ messages: messages.reverse() });
	}

	onTabChange = (tabName) => {
		this.setState({ tabName });
	}

	handleSearchUser = (e) => {
		alert('eeeeeeeeeeeeeeee', e);
	}

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
						<small>
							{this.renderTimestamp(message.timestamp)}
						</small>
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

	addMessage(message) {
		const { messages } = this.state;
		this.setState({ messages: [...messages, message] });
	}

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

	render() {
		return (
			<Chat
				{...this.state}
				renderMessages={this.renderMessages}
				messageChangeHandler={this.messageChangeHandler}
				sendMessageHandler={this.sendMessageHandler}
				onTabChange={this.onTabChange}
				handleSearchUser={this.handleSearchUser}
			/>
		);
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
