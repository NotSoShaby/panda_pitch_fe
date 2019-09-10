import React from 'react';
import { Link } from 'react-router-dom';
import IMAGES from '../../assets/images';

const { PROFILE_PIC, TWITTER_ICON } = IMAGES;

const Profile = ({
	getUserById: {
		data: {
			fullName = '', positionData, interestsData, companyData, user,
		} = { user: {} },
	},
	isVisible,
	mediaList: { data = [] },
	onMediaListButtonClick,
	addUserInMediaList,
}) => (
	<div className="content_wrapper">
		<div className="abt_bluebox">
			<div className="abt_head">
				<div className="abt_main">
					<div className="abt_img">
						<img src={PROFILE_PIC} alt="" />
					</div>
					<div className="abt_name">
						<h4>
							{fullName}
							{' '}
							<span><img src={TWITTER_ICON} alt="" /></span>
						</h4>
						<p>{positionData && positionData[0].name}</p>
						<p><span>{companyData && companyData.name}</span></p>
					</div>
				</div>
				{user && user.is_journalist && (
					<div className="abt_btn relative" onClick={onMediaListButtonClick} role="button">
          Add to Media List
						{Array.isArray(data) && isVisible && (
							<ul className="absolute abtul_btn">
								{data.map(item => <li key={item.name} onClick={() => addUserInMediaList(item.id)} role="button">{item.name}</li>)}
							</ul>
						)}
					</div>
				)}
			</div>
			<div className="abt_info">
				<div className="info_lft">
					<h4>About Journalist</h4>
					<p>
Senior Writer for Bloomberg News. Views expressed in Twitter feed are my own.
                   Coverage Area: Middle East, Bloomberg News, Time Magazine, Chicago Herald
						{' '}

					</p>
				</div>
				{/* <div className="info_rgt">
						<h4>How to Pitch me</h4>
						<p>
Cut the bullsh*t.  No more than 150 word/Pitch. Read my
              Interests before you decide to pitch me.

						</p>
					</div> */}
			</div>
			<div className="abt_intrest wdth100">
				<h4>Interested In</h4>
				<ul>
					{Array.isArray(interestsData) && interestsData.map(
						item => <li key={item.name}>{item.name}</li>,
					)}
				</ul>
			</div>
		</div>
		<div className="abt_sidebar">
			<div className="online_stat wdth100">
				<p>
					<span />
Last Contact: 15 Days ago
				</p>
			</div>
			<div className="media_sec wdth100">
				<h2>Media Relations Management</h2>
				<h3>Pitches</h3>
				<div className="pitches_list">
					<label htmlFor="text" className="pitches">
FUGU Launch
						<input type="radio" checked="checked" name="radio" />
						<span className="checkmark_radio" />
					</label>
					<label htmlFor="text" className="pitches">
3.0 Version
						<input type="radio" name="radio" />
						<span className="checkmark_radio" />
					</label>
					<label htmlFor="text" className="pitches">
ZORE Lock Launch
						<input type="radio" name="radio" />
						<span className="checkmark_radio" />
					</label>
				</div>
			</div>
			<div className="notes wdth100">
				<h3>Notes</h3>
				<div className="note_wrap">
					<div className="notes_title">
						<h5>
							<span><img src={PROFILE_PIC} alt="" /></span>
Jackson Riggs
						</h5>
						<p>Nov 4, 2018</p>
					</div>
					<div className="notes_para">
						<p>Responded positive to FUGU Launch - asked for interview with CEO</p>
					</div>
				</div>
				<div className="note_wrap">
					<div className="notes_title">
						<h5>
							<span><img src={PROFILE_PIC} alt="" /></span>
Jackson Riggs
						</h5>
						<p>Nov 4, 2018</p>
					</div>
					<div className="notes_para">
						<p>Responded positive to FUGU Launch - asked for interview with CEO</p>
					</div>
				</div>
				<div className="note_wrap center_items">
					<Link to="/">
						{' '}
						<span><i className="fa fa-plus" aria-hidden="true" /></span>
						<p>Add a new note</p>

					</Link>
				</div>

			</div>
			<div className="sidebar_contact wdth100">
				<h3>Contacts</h3>
				<div className="contact_wrap">
					<div className="contact_img">
						<img src={PROFILE_PIC} alt="" />
					</div>
					<div className="contact_info">
						<h4>James Dean</h4>
						<p>PR</p>
						<p><span>40 Comms</span></p>
					</div>
				</div>
				<div className="contact_wrap">
					<div className="contact_img">
						<img src={PROFILE_PIC} alt="" />
					</div>
					<div className="contact_info">
						<h4>James Dean</h4>
						<p>PR</p>
						<p><span>40 Comms</span></p>
					</div>
				</div>
				<div className="contact_wrap">
					<div className="contact_img">
						<img src={PROFILE_PIC} alt="" />
					</div>
					<div className="contact_info">
						<h4>James Dean</h4>
						<p>PR</p>
						<p><span>40 Comms</span></p>
					</div>
				</div>
				<div className="contact_wrap">
					<div className="contact_img">
						<img src={PROFILE_PIC} alt="" />
					</div>
					<div className="contact_info">
						<h4>James Dean</h4>
						<p>PR</p>
						<p><span>40 Comms</span></p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Profile;
