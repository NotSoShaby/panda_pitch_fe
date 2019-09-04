import React from 'react';
import { Link } from 'react-router-dom';
import IMAGES from '../../../assets/images';

const RightSideBar = ({
	profile: {
		data: {
			url,
		} = {},
	},
	channel: { data: { participantsData = [] } = {} },
}) => {
	const otherConnectedUsersInCurrentChannel =	Array.isArray(participantsData)
  && participantsData.filter(item => item.url !== url);
	let secondPerson = {};
	let secondPersonId = '';
	if (otherConnectedUsersInCurrentChannel.length) {
		secondPerson = otherConnectedUsersInCurrentChannel[0];
		const url = secondPerson.url;
		secondPersonId = url.split('/')[5];
	}
	const {
		full_name, company_data = {}, position_data = [],
	} = secondPerson;
	return (
		<div className="msg-col-3">
			<div className="card_pro_row msg-crd-col ">
				<div className="card_pro_img crd-img ">
					<img src={IMAGES.CARD_PRO} alt="selectedUser" />
				</div>
				<div className="card_pro_contnt crd-cont">
					<h3>{full_name}</h3>
					<p>{company_data.name}</p>
					<p>{position_data[0] && position_data[0].name}</p>
				</div>
			</div>
			<div className="crd-para">
				<p>
					{position_data[0] && position_data[0].name}
					{' '}
for
					{' '}
					{position_data.name}
					{' '}
News Views expressed In Twitter
					feed are my own.
				</p>
				<p>
					<span>coverage area :</span>
					middle east, bloomberg news ,times magzine,chicago herald
				</p>
			</div>
			{secondPersonId && (
				<span className="msg-go-btn">
					<button type="button" className="btn new_pitch_btn disc-btn">
						<Link to={`/profile?id=${secondPersonId}`}>GO TO PROFILE</Link>
					</button>
				</span>
			)}
		</div>
	);
};

export default RightSideBar;
