/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import InputRangeSelector from '../../components/inputRange';
import Button from '../../components/button';
import AutoComplete from '../../components/autoComplete';
// import HELPER from '../../utils/helper';
import StatusBar from '../signup/statusBar';
import IMAGES from '../../assets/images';
import METADATA from '../../utils/metadata';

const { SEARCH_ICON } = IMAGES;
const { PITCHES } = METADATA;

const CreatePitch = ({
	steps,
	active,
	hideDiv,
	progressValue,
	pressReleaseImage,
	// handleClient,
	handleAddNewClient,
	// handleAddProfile,
	// handleAddTopics,
	handleAddMedia1,
	handleAddMedia2,
	handleAddMedia3,
	handleAddPressRelease,
	topics,
	onCreate,
	onTodoSelection,
	// journalistProfile,
	journalistInterests,
	getJournalistInterests,
	handleInputText,
	onRangeChange,
	// error,
}) => {
	const [val, setVal] = useState('');
	return (
		<div className="form_section">
			{/* <div className="form_logo">
				<img src={IMAGES.WHITE_LOGO} alt="" />
			</div> */}
			<div className="form_wrapper">
				<div
					key="form1"
					className="step_form_col"
				>
					<div className="slidecontainer">
						<p>
							Create
							New
							Pitch
						</p>
						<StatusBar
							steps={
								steps
							}
							active={
								active
							}
						/>
						<div className="full_widt">
							<h3>
								Client
							</h3>
							<div key="search_box" className="srch_row">
								<div className="search_auto_wrapper">
									<div className="srch_col">
										<input
											type="search"
											placeholder="client"
											value={val}
											onChange={e => setVal(e.target.value)}
										/>
										<button type="button">
											<img className="srch_icn" src={SEARCH_ICON} alt="search" />
										</button>
									</div>
									<Search val={val} />
								</div>
							</div>
						</div>

						{hideDiv ? (
							<div>
								<div className="full_widt">
									<h3>
										Client
										Name
									</h3>
									<div className="custom_field">
										<input
											type="text"
											name="clientName"
											value=""
											id="clientName"
											placeholder="Client Name"
											onChange={() => {}}
										/>
										<label htmlFor="clientName">
											Client
											Name
										</label>
									</div>
								</div>
								<div className="full_widt">
									<h3>
										Client
										Website
									</h3>
									<div className="custom_field">
										<input
											type="text"
											name="clientWebsite"
											value=""
											id="clientWebsite"
											placeholder="Client Website"
											onChange={() => {}}
										/>
										<label htmlFor="clientWebsite">
											Client
											Website
										</label>
									</div>
								</div>
							</div>
						) : (
							<div />
						)}
						<Button
							className="white_bg_btn"
							onClick={
								handleAddNewClient
							}
						>
							ADD
							NEW
							CLIENT
						</Button>
						<div>
							<p>
								CTA(choose
								two)
							</p>
						</div>
						<div className="full_widt">
							<h3>
								Headline
								(up
								to
								50
								characters)
							</h3>
							<div className="custom_field">
								<input
									type="text"
									name="headline"
									id="headline"
									placeholder="This should catch your attention and give the main idea of the pitch"
									onChange={handleInputText}
								/>
								<label htmlFor="headline">
									Headline
								</label>
							</div>
						</div>
						<div className="full_widt">
							<h3>
								The
								Pitch
							</h3>
							<div className="custom_field">
								<input
									type="text"
									name="pitchPoints"
									id="pitchPoints"
									placeholder="Write your pitch here. Make sure you cover the main points."
									onChange={handleInputText}
								/>
								<label htmlFor="pitchPoints">
									The
									Pitch
								</label>
							</div>
						</div>
						<div className="full_widt">
							<h3>
								Add
								Topics
							</h3>
							<div className="custom_field">
								<AutoComplete
									list={
										journalistInterests.data
									&& journalistInterests
										.data
										.data
									&& journalistInterests
										.data
										.data
										.results
									}
									onCreate={
										onCreate
									}
									onSelect={
										onTodoSelection
									}
									boxes={
										topics
									}
									onChange={
										getJournalistInterests
									}
								/>
							</div>


						</div>
						<div>
							<p>
								Add
								Media
							</p>
							<div>
								<Button onClick={handleAddMedia1}>+</Button>
								<Button onClick={handleAddMedia2}>+</Button>
								<Button onClick={handleAddMedia3}>+</Button>
							</div>
						</div>
						<div>
							<p>
								Add
								Press
								Release
							</p>
							<Button onClick={handleAddPressRelease}>+</Button>
							<input
								id="file"
								type="file"
								name="selectedFile"
								onChange={handleAddPressRelease}
							/>
							<img id="target" src={pressReleaseImage} width="50" height="50" />
						</div>
						<div>
							<InputRangeSelector
								minValue={0}
								step={20 / 2}
								value={progressValue}
								maxValue={20}
								onChange={value => onRangeChange({ value })}
							/>
							<ul className="range_list">
								<li>Regular</li>
								<li>Embargo</li>
								<li>Exclusive</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Search = ({ val }) => PITCHES.length > 0 && (
	<div className="srch_lst_row">
		{PITCHES.map(({ name, profile, profilePic }) => {
			console.log('name', val);
			if (val && name.toLowerCase().includes(val.toLowerCase())) {
				return (
					<div key={name} className="srch_lst_col">
						<div className="srch_pic">
							<img src={profilePic} alt="profile_pic" />
						</div>
						<span className="pro_detail">
							<h3>{name}</h3>
							<p>{profile}</p>
						</span>
					</div>
				);
			}
			return null;
		})}
	</div>
);

export default CreatePitch;
