import React from 'react';
import PropTypes from 'prop-types';

const ChatUserCard = ({ data, onClick }) => (
	<div className="card_pro_row msg-crd-col" onClick={onClick} role="button">
		<div className="card_pro_img msg-crd-img">
			<img src={data.profileImg} alt="user" />
		</div>
		<div className="card_pro_contnt msg-crd-cont">
			<p>
				{data.name}
				<span>
					{data.lastSeen}
				</span>
			</p>
			<h3>{data.title}</h3>
			<p>{data.about}</p>
		</div>
	</div>
);

// props initialization ( default values )
ChatUserCard.defaultProps = {
	data: {},
};

// props type definition
ChatUserCard.propTypes = {
	data: PropTypes.object,
};

// default importing
export default ChatUserCard;
