import React, { useEffect, useRef } from 'react';
import Sidebar from './sidebar/sidebar';
import { chatBoatPara } from './ChatMockData';
import IMAGES from '../../assets/images';
import RightSidebar from './sidebar/rightSideBar';

const Chat = ({
	messages, createNewChat, onChange, sendMessage, ...props
}) => {
	let messagesEndRef = useRef(null);
	const scrollToBottom = () => {
		messagesEndRef.scrollIntoView({ behavior: 'smooth' });
	};
	useEffect(scrollToBottom, [messages]);
	return (
		<div className="msg-row">
			<Sidebar {...props} />
			<div className="msg-col-2">
				<button onClick={createNewChat}> Create A New Chat </button>
				<div className="msg-box">
					<h2>FUGU Launch New Crowdfunding Campaign</h2>
					<p>{chatBoatPara}</p>
					<a href="#me">View Pitch</a>
				</div>
				<div className="chat-info">
					<div className="card_pro_row msg-crd-col cht-box-2">
						<div className="card_pro_contnt msg-crd-cont cht-para">
							<p>12:30</p>
							<p>Lorem Ipsum has been the industry's.</p>
						</div>
					</div>
					<div className="card_pro_row msg-crd-col cht-box">
						<div className="card_pro_img msg-crd-img cht-img">
							<img src={IMAGES.CARD_PRO} alt="chatUser" />
						</div>
						<div className="card_pro_contnt msg-crd-cont cht-para">
							<p>12:30</p>
							<p>Lorem Ipsum has been the industry's.</p>
						</div>
					</div>
					<div className="card_pro_row msg-crd-col cht-box-2">
						<div className="card_pro_contnt msg-crd-cont cht-para">
							<p>12:30</p>
							<p>Lorem Ipsum has been the industry's.</p>
						</div>
					</div>
					<div className="card_pro_row msg-crd-col cht-box-2">
						<div className="card_pro_contnt msg-crd-cont cht-para">
							<p>12:30</p>
							<p>Lorem Ipsum has been the industry's.</p>
						</div>
					</div>
					{messages.map(message => message && (
						<div className="card_pro_row msg-crd-col cht-box">
							<div className="card_pro_img msg-crd-img cht-img">
								<img src={IMAGES.CARD_PRO} alt="chatUser" />
							</div>
							<div className="card_pro_contnt msg-crd-cont cht-para">
								<p>12:30</p>
								<p>{message}</p>
							</div>
						</div>
					))}
					<div ref={(ref) => { messagesEndRef = ref; return null; }} className="card_pro_row msg-crd-col cht-box" />
					<div className="msg-ipt">
						<form className="ipt-chat" onSubmit={sendMessage}>
							<input name="message" type="search" placeholder="Type a Message" onChange={onChange} />
							<div className="chat-attch">
								<i className="fa fa-smile-o" aria-hidden="true" />
								<i className="fa fa-paperclip" aria-hidden="true" />
								<button type="submit">
									<i className="fa fa-caret-right" aria-hidden="true" />
								</button>
							</div>
						</form>
					</div>

				</div>
			</div>
			<RightSidebar />
		</div>
	);
};

export default Chat;
