import React from 'react';
import { Link } from 'react-router-dom';
import IMAGES from '../../../assets/images';

const RightSideBar = (
	{ profile: { data: { fullName, companyData = {}, positionData = [] } = {} } },
) => (
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
		<span className="msg-go-btn">
			<button type="button" className="btn new_pitch_btn disc-btn"><Link to="/profile">GO TO PROFILE</Link></button>
		</span>
	</div>
);

export default RightSideBar;
