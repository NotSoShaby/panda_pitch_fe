import React from 'react';
import { Link } from 'react-router-dom';
import IMAGES from '../../../assets/images';

const RightSideBar = (
	{
		profile: {
			data: {
				url, fullName, companyData = {}, positionData = [],
			} = {},
		}, channel: { data: { participants = [] } = {} },
	},
) => {
	const otherConnectedUsersInCurrentChannel = participants && participants.filter(
		item => item !== url,
	);
	let secondPersonId = '';
	if (otherConnectedUsersInCurrentChannel.length) {
		const url = otherConnectedUsersInCurrentChannel[0];
		secondPersonId = url.split('/')[5];
	}

	console.log('oy====1===>', secondPersonId);
	return (
		<div className="msg-col-3">
			<div className="card_pro_row msg-crd-col ">
				<div className="card_pro_img crd-img ">
					<img src={IMAGES.CARD_PRO} alt="selectedUser" />
				</div>
				<div className="card_pro_contnt crd-cont">
					<h3>{fullName}</h3>
					<p>{companyData.name}</p>
					<p>{positionData[0] && positionData[0].name}</p>
				</div>
			</div>
			<div className="crd-para">
				<p>
					{positionData[0] && positionData[0].name}
					{' '}
        for
					{' '}
					{companyData.name}
					{' '}
        News Views expressed In Twitter feed are my own.
				</p>
				<p>
					<span>
					coverage area :
					</span>
				middle east, bloomberg news ,times magzine,chicago herald
				</p>
			</div>
			{secondPersonId && (
				<span className="msg-go-btn">
					<button type="button" className="btn new_pitch_btn disc-btn"><Link to={`/profile?id=${secondPersonId}`}>GO TO PROFILE</Link></button>
				</span>
			)}
		</div>
	);
};

export default RightSideBar;
