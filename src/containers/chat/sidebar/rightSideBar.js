import React from 'react';
import IMAGES from '../../../assets/images';

const RightSideBar = () => (
	<div className="msg-col-3">
		<div className="card_pro_row msg-crd-col ">
			<div className="card_pro_img crd-img ">
				<img src={IMAGES.CARD_PRO} alt="selectedUser" />
			</div>
			<div className="card_pro_contnt crd-cont">
				<h3>Hillel Holland</h3>
				<p>Bloomberg News</p>
				<p>Senior Writer</p>
			</div>
		</div>
		<div className="crd-para">
			<p>Senior Writer for Bloomberg News Views expressed In Twitter feed are my own.</p>
			<p>
				<span>
					coverage area :
				</span>
				middle east, bloomberg news ,times magzine,chicago herald
			</p>
		</div>
		<span className="msg-go-btn">
			<button type="button" className="btn new_pitch_btn disc-btn">GO TO PROFILE</button>
		</span>
	</div>
);

export default RightSideBar;
