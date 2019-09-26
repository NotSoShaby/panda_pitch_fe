import React from 'react';
import { Link } from 'react-router-dom';
import IMAGES from '../../assets/images';
import HELPER from '../../utils/helper';

const { SEARCH_ICON } = IMAGES;

const MediaList = ({
	mediaValue, filterMedia, mediaList,
}) => (
	<div className="container cstm_container">
		<div className="media_head">
			<div className="media_head_lft">
				<h3>Media Lists</h3>
				<p>Click list to edit contents</p>
			</div>
			<div className="media_head_rgt">
				<button className=" cstm_green_btn trans_btn">
					<Link to="/media">CREATE NEW LIST</Link>
				</button>
			</div>
		</div>
		<div key="search_box" className="srch_row">
			<div className="search_auto_wrapper">
				<div className="srch_col">
					<input
						type="search"
						placeholder="Search for journalists or media outlets"
						value={mediaValue}
						onChange={filterMedia}
					/>
					<button type="button">
						<img className="srch_icn" src={SEARCH_ICON} alt="search" />
					</button>
				</div>
			</div>
		</div>
		<PitchList list={mediaList.data} />
	</div>
);

const PitchList = ({ list = [] }) => {
	if (Array.isArray(list) && list.length > 0) {
		return (
			<div className="media_launch ">
				<div className="launch_box list_col">
					<div className="launch_lft">
						<h4>Fugu Launch 2018</h4>
						<p>Created 27/5/19</p>
						<p>
							<Link to="/">10 Journalists</Link>
						</p>
					</div>
					<div className="launch_rgt">
						<span>
							<Link to="/">
								<i className="fa fa-clone" aria-hidden="true" />
							</Link>
						</span>
						<span>
							<Link to="/">
								<i className="fa fa-trash-o" aria-hidden="true" />
							</Link>
						</span>
					</div>
				</div>
				{list.map(({
					id, name, timeCreated, journalistsData,
				}) => (
					<div className="launch_box list_col">
						<div className="launch_lft">
							<h4>{name}</h4>
							<p>
                Created
								{' '}
								{HELPER.getValidDate(timeCreated)}
							</p>
							<p>
								<Link to="/">
									{Array.isArray(journalistsData) && journalistsData.length}
									{' '}
                  Journalists
								</Link>
							</p>
						</div>
						<div className="launch_rgt">
							<p>
                Journalists:
								{' '}
								{Array.isArray(journalistsData) && journalistsData.map(
									({ full_name }, index) => ((journalistsData.length - 1 === index) ? `${full_name}` : `${full_name}, `),
								)}
								{' '}
							</p>
							<p>
								<Link to={`/media?id=${id}`}>See All</Link>
							</p>
						</div>
					</div>
				))}
			</div>
		);
	}
	return (
		<div className="new_pitch ">
			<h4>You don’t currently have any lists!</h4>
			<button className=" cstm_green_btn trans_btn">
				<Link to="/media">CREATE YOUR FIRST MEDIA LIST</Link>
			</button>
		</div>
	);
};

export default MediaList;
