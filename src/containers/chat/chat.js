import React from 'react';
import Sidebar from './sidebar/sidebar';

const Chat = ({
	renderMessages, message, messageChangeHandler, sendMessageHandler,
}) => (
	<div style={{ width: '100%', display: 'flex' }}>
		<Sidebar />
		<div style={{ width: '100%' }}>

			<form onSubmit={sendMessageHandler}>
				<input onChange={messageChangeHandler} value={message} />
				<button>Submit</button>
			</form>

			<ul>{renderMessages()}</ul>
		</div>
	</div>
);

export default Chat;
