import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IMAGES from '../../assets/images';

const { SEARCH_ICON, USER } = IMAGES;

const PrHome = ({
	createNewPitch, view, setView, findJournalist, journalists,
}) => {
	const [val, setVal] = useState('');
	return [
		<div key="create" className="new_pitch">
			<h4>Start getting hits by pitching some journalists !</h4>
			<button className="btn new_pitch_btn" onClick={createNewPitch}>Write New Pitch</button>
		</div>,
		<div key="search_box" className="srch_row">
			<div className="search_auto_wrapper">
				<div className="srch_col">
					<input
						type="search"
						value={val}
						placeholder="Search for journalists or media outlets"
						onChange={(e) => { setVal(e.target.value); findJournalist(e.target.value); }}
					/>
					<button type="button">
						<img className="srch_icn" src={SEARCH_ICON} alt="search" />
					</button>
				</div>
				{Array.isArray(journalists.data) && val && <Search list={journalists.data} />}
			</div>
		</div>,
		<div key="view" className="pitches_row">
			<h4>My Pitches</h4>
			<span className="slide_toggle">
				<span className={`${view ? 'active' : ''}`}>
					<i className="fa fa-th-large" aria-hidden="true" onClick={() => setView(1)} />
				</span>
				<span className={`${view ? '' : 'active'}`}>
					<i className="fa fa-list-ul" aria-hidden="true" onClick={() => setView(0)} />
				</span>
			</span>
		</div>,
	];
};

const Search = ({ list }) => list.length > 0 && (
	<div className="srch_lst_row">
		{list.map(({ fullName, positionData, id }) => (
			<div key={fullName} className="srch_lst_col">
				<Link to={`/profile?id=${id}`}>
					<div className="srch_pic">
						<img src={USER} alt="profile_pic" />
					</div>
				</Link>
				<span className="pro_detail">
					<h3>{fullName}</h3>
					<p>{positionData && positionData[0].name}</p>
				</span>
			</div>
		))}
	</div>
);

export default PrHome;
