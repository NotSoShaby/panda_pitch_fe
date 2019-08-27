import React, { Component } from 'react';

class WebSocketService extends Component {
	static instance = null;

	callbacks = {};

	static getInstance() {
		if (!WebSocketService.instance) {
			WebSocketService.instance = new WebSocketService();
		}
		return WebSocketService.instance;
	}

	constructor(props) {
		super(props);
		this.socketRef = null;
	}

	state() {
		return this.socketRef.readyState || null;
	}

	connect(id) {
		const path = `ws://18.191.202.211:8000/ws/chat/${id}/?token=${localStorage.getItem('token')}`;
		this.socketRef = new WebSocket(path);
		this.socketRef.onopen = () => {
			console.log('websocket open');
		};
		this.socketRef.onmessage = (e) => {
			console.log('message ', e);
			this.socketNewMessage(e.data);
		};
		this.socketRef.onerror = (e) => {
			console.log('websocket error', e.message);
		};
		this.socketRef.onclose = () => {
			console.log('websocket is closed');
			this.connect(id);
		};
	}

	socketNewMessage(data) {
		const parsedData = JSON.parse(data);
		const command = parsedData.command;
		if (Object.keys(this.callbacks).length === 0) {
			return;
		}
		if (command === 'messages') {
			this.callbacks[command](parsedData.messages);
		}
		if (command === 'new_message') {
			this.callbacks[command](parsedData.message);
		}
		if (parsedData.user) {
			const key = 'new_message';
			this.callbacks[key](parsedData.message, parsedData.user);
		}
		if (parsedData.user === 'Anonymous user') {
			const key = 'authentication';
			this.callbacks[key](parsedData.message);
		}
	}

	fetchMessages(username, chatId) {
		this.sendMessage({ command: 'fetch_message', username, chatId });
	}

	newChatMessages(message) {
		this.sendMessage({
			// command: 'new_message',
			// from: message.from,
			message: message.content,
			chatId: message.chatId,
		});
	}

	addCallbacks(messagesCallback, newMessageCallback, authenticationCallback) {
		this.callbacks.messages = messagesCallback;
		this.callbacks.new_message = newMessageCallback;
		this.callbacks.authentication = authenticationCallback;
	}

	sendMessage(data) {
		try {
			this.socketRef.send(JSON.stringify({ ...data }));
		} catch (err) {
			console.log('err=======>', err.message);
		}
	}

	waitForSocketConnection(callback) {
		const socket = this.socketRef;
		const recursion = this.waitForSocketConnection;
		setTimeout(() => {
			if (socket.readyState === 1) {
				console.log('connection is secure');
				if (callback != null) {
					callback();
				}
				return;
			}
			console.log('waiting for connection...');
			recursion(callback);
		}, 1);
	}

	render() {
		return <div />;
	}
}

const WebSocketInstance = WebSocketService.getInstance();

export default WebSocketInstance;
