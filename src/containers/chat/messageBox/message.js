import React from 'react';
import IMAGES from '../../../assets/images';

const Message = (props) => {
	const {
		id, timestamp, content, owner, email, login: { data },
	} = props;
	const date = new Date(timestamp);
	return (
		<div key={id} className={`card_pro_row msg-crd-col ${data.email === owner ? 'cht-box-2' : 'cht-box'}`}>
			{email !== owner && (
				<div className="card_pro_img msg-crd-img cht-img">
					<img src={IMAGES.CARD_PRO} alt="chatUser" />
				</div>
			)}
			<div className="card_pro_contnt msg-crd-cont cht-para">
				<p>{`${date.getHours()}:${date.getMinutes()}`}</p>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default Message;
