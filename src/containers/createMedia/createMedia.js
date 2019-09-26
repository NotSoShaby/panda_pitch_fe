import React from 'react';
import { Link } from 'react-router-dom';
import IMAGES from '../../assets/images';

const { SEARCH_ICON, ADJUST } = IMAGES;

const CreateMedia = ({
	journalistValue, id, filterJournalists, isMediaListOpen, journalists, listName, saveInMediaList,
	mediaList: { data = [] }, addJournalistInMediaList, onMediaListButtonClick, selectAllJournalist,
	removeJournalistFromMedia, selectAll, ...props
}) => {
	let selectedMedia = {};
	const selectedJournalistList = Array.isArray(data) && data.filter(
		item => item.id === parseInt(id, 10),
	);
	if (selectedJournalistList.length) {
		selectedMedia = selectedJournalistList[0].journalistsData;
	}
	return (
		<div className="container cstm_container">
			<div className="launch_head">
				<h3>
					{listName}
					{' '}
					{!id && <span><i className="fa fa-pencil-square-o" aria-hidden="true" /></span>}
				</h3>
			</div>
			<div key="search_box" className="srch_row">
				<div className="search_auto_wrapper">
					<div className="srch_col">
						<input
							type="search"
							placeholder="Search for journalists or media outlets"
							value={journalistValue}
							onChange={filterJournalists}
						/>
						<button type="button" className="adjust_icn">
							<img className="srch_icn" src={ADJUST} alt="search" />
						</button>
						<button type="button">
							<img className="srch_icn" src={SEARCH_ICON} alt="search" />
						</button>
					</div>
				</div>
			</div>
			<div className="media_launch ">
				<div className="media_list_optns">
					<div className="media_optns_left">
						<p>Choose All</p>
						<span className="green_checkbx">
							<input name="styled-checkbox-1" className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1" checked={selectAll} onChange={() => selectAllJournalist()} />
							<label htmlFor="styled-checkbox-1"> </label>
						</span>
					</div>
					<div className="media_optns_rgt">
						{id && <button className="del_btn" onClick={removeJournalistFromMedia}><i className="fa fa-trash-o" aria-hidden="true" /></button>}
						{id ? (
							<button className="new_pitch_btn relative" onClick={onMediaListButtonClick}>
            ADD TO LIST
								{Array.isArray(data) && isMediaListOpen && (
									<ul className="absolute abtul_btn">
										{data.map(item => <li key={item.name} onClick={() => addJournalistInMediaList(item.id)} role="button">{item.name}</li>)}
									</ul>
								)}
							</button>
						)
							: (
								<button className="new_pitch_btn relative" onClick={saveInMediaList}>
            SAVE LIST
								</button>
							)}
					</div>
				</div>
				<JournalistList
					list={id && !journalistValue ? (selectedMedia) : (journalists.data || [])}
					{...props}
					id={id}
				/>
			</div>
		</div>
	);
};

const JournalistList = ({
	list = [], onJournalistSelection, selectedJournalists = [],
}) => {
	if (Array.isArray(list) && list.length > 0) {
		return (
			<div className="list_view media_view">
				{list.map((listData) => {
					const {
						id = listData.id,
						fullName = listData.full_name,
						interestsData =
						listData.interests_data,
						positionData = listData.position_data, companyData = listData.company_data,
					} = listData;
					const isExist = selectedJournalists.filter(itemId => itemId === id).length;
					return (
						<div className="list_col media_list_col">
							<span className="green_checkbx">
								<input checked={isExist} className="styled-checkbox" id={`styled-checkbox-${id}`} type="checkbox" value="value1" onChange={() => onJournalistSelection(id)} />
								<label htmlFor={`styled-checkbox-${id}`}> </label>
							</span>

							<div className="media_list_left">
								<div className="media_list_img">
									<img src="img/person.jpg" alt="" />
								</div>
								<div className="media_list_name">
									<h4>
										{fullName}
										{' '}
										<span>
											<img src="img/tweet.png" alt="" />
										</span>
									</h4>
									<p>{Array.isArray(positionData) && positionData[0].name}</p>
									<p>
										<span>{companyData.name}</span>
									</p>
								</div>
							</div>
							<div className="media_list_center">
								<ul className="media_links pri-link">
									{Array.isArray(interestsData)
									&& interestsData.map(({ name }) => (
										<li>
											<Link to="/">{name}</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="media_list_rgt">
								<p>Currently on: Apple Product Launch, Product Launch 2019…</p>
								<p>
									<Link to="/">See All</Link>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
	return (
		<div className="new_pitch ">
			<h4>You don’t currently have any lists!</h4>
		</div>
	);
};

export default CreateMedia;
