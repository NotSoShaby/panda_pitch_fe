/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-indent */
import React from 'react';
import InputRangeSelector from '../../components/inputRange';
import SearchBox from '../../components/searchbox';
import AutoComplete from '../../components/autoComplete';
import StatusBar from '../../components/statusBar';
// import Button from '../../components/button';
// import HELPER from '../../utils/helper';
// import IMAGES from '../../assets/images';
// import METADATA from '../../utils/metadata';

// const { SEARCH_ICON } = IMAGES;
// const { PITCHES } = METADATA;

// const renderCreateButton = (val) => {
// 	console.log('entered');
// 	if (val !== '') {
// 		return <i className="fa fa-plus" aria-hidden="true" onClick={() => console.log(val)} />;
// 	}
// 	return null;
// };

const CreatePitch = ({
	steps,
	active,
	hideDiv,
	mediaFiles,
	progressValue,
	// pressReleaseImage,
	handleAddNewClient,
	handleAddMedia,
	handleAddClientImage,
	// handleAddMedia2,
	// handleAddMedia3,
	handleAddPressRelease,
	onCreate,
	onTodoSelection,
	journalistInterests,
	getJournalistInterests,
	// handleInputText,
	onRangeChange,
	changeNextScreen,
	// handleClient,
	// handleAddProfile,
	// handleAddTopics,
	// topics,
	// journalistProfile,
	// error,
	journalists,
	handlePrSelect,
	setSearchValue,
	searchString,
}) => (
	<div className="create_new_pitch_form">
		<div className="form_wrapper pitch_form_wraper">
			<div key="form1" className="step_form_col">
				<div className="slidecontainer">
					<div className="ad-pernl-hdg">
						<h2>Create	New	Pitch</h2>
					</div>
					<StatusBar steps={steps} active={active} />
					{/* <div className="full_widt">
							<h3>Client</h3>
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
						</div> */}
					<div className="ad-pernl-conts">
						<label htmlFor="ddd">
              Client
						</label>
						<SearchBox
							data={journalists}
							placeholder="Client"
							onSelect={handlePrSelect}
							setSearchValue={setSearchValue}
							searchString={searchString}
						/>
					</div>

					{hideDiv ? (
						<div>
							<div className="two_dived_col">
								<div className="full_widt">
									<h3>Client Name</h3>
									<div className="new_field">
										<input
											type="text"
											placeholder="Client Name"
										/>

									</div>
								</div>
								<div className="full_widt">
									<h3>Client Website</h3>
									<div className="new_field">
										<input
											type="text"
											placeholder="Client Website"
										/>
									</div>
								</div>
							</div>

							<div className="ad-pernl-conts cnp-col">
								<span className="cnp-file" role="button" onClick={e => handleAddClientImage(e.target.result)}>
									<i className="fa fa-plus" />
									<input type="file" placeholder="Client Website" />
									<span>No file Choosen</span>
								</span>
								<span className="view-btn-rgt add-pernl-btn cnp-col-btn">
									<button type="button" className="btn new_pitch_btn snd-btn">ADD NEW CLIENT</button>
								</span>
							</div>
						</div>

					) : (
						<div />
					)}
					{/* {hideDiv && (
							<Button className="white_bg_btn" onClick={handleAddNewClient}>ADD	NEW	CLIENT </Button>
						)} */}
					{!hideDiv && (
						<div className="ad-pernl-conts cnp-col">
							<span className="cnp-file" role="button" onClick={handleAddNewClient}>
								<i className="fa fa-plus" />
								<input type="file" placeholder="Client Website" />
								<span className="fnt_wght">Add New Client</span>
							</span>
						</div>
					)}


					<div>
						<h3>CTA (choose two)</h3>
						<AutoComplete
							showTextBox={false}
							list={
								journalistInterests.data
									&& journalistInterests.data.data
									&& journalistInterests.data.data.results
							}
							onCreate={onCreate}
							onSelect={onTodoSelection}
							boxes={
								[{
									value: 'Interview', isActive: false,
								}, {
									value: 'Coverage', isActive: false,
								}, {
									value: 'Written Q&A', isActive: false,
								}, {
									value: 'Byllined Article', isActive: false,
								}, {
									value: 'Event Invite', isActive: false,
								}, {
									value: 'News', isActive: false,
								}, {
									value: 'Product Review', isActive: false,
								}]
							}
							onChange={getJournalistInterests}
						/>
					</div>
					<div className="full_widt">
						<h3>Headline (up to 50 characters)</h3>
						<div className="new_field">
							<input
								type="text"
								placeholder="This should catch your attention and give the main idea of the pitch"
							/>

						</div>
					</div>
					<div className="full_widt">
						<h3>The Pitch</h3>
						<div className="new_field">
							<textarea placeholder="Write your pitch here. Make sure you cover the main points." />
						</div>
					</div>
					<div className="im k">
						<h3>Add Topics</h3>
						{/* <div className="new_field">
							<input
								type="text"
								placeholder="Topics"
								onChange={e => renderCreateButton(e.target.value)}
							/>
						</div> */}
						<div className="custom_field">
							<AutoComplete
								list={
									journalistInterests.data
										&& journalistInterests.data.data
										&& journalistInterests.data.data.results
								}
								onCreate={onCreate}
								onSelect={onTodoSelection}
								boxes={
									[{
										value: 'Travel', isActive: false,
									}, {
										value: 'Food', isActive: false,
									}, {
										value: 'Leisure', isActive: false,
									}, {
										value: 'Healthcare', isActive: false,
									}, {
										value: 'Technology', isActive: false,
									}]
								}
								onChange={getJournalistInterests}
							/>
						</div>
					</div>
					{/* <div>
							<p>Add Media</p>
							<div>
								<Button onClick={handleAddMedia1}>+</Button>
								<Button onClick={handleAddMedia2}>+</Button>
								<Button onClick={handleAddMedia3}>+</Button>
							</div>
						</div> */}
					<div className="ad-pernl-conts add_media_col">
						<label htmlFor="text">
                  Add Media
						</label>
						<div className="cnp-snipt">
							{!mediaFiles[0] && (
								<div className="cnp-snipt-img">
									<i className="fa fa-times cross" />
									<i className="fa fa-plus plus_icn" aria-hidden="true" />
									<input type="file" onChange={e => handleAddMedia(0, e.target.files[0])} />
								</div>
							)}
							{mediaFiles[0] && (
								<div className="cnp-snipt-img">
									<i className="fa fa-times cross" />
									<i className="fa fa-plus plus_icn" aria-hidden="true" />
									<img src={mediaFiles[0]} />
								</div>
							)}
							<div className="cnp-snipt-img">
								<i className="fa fa-times cross" />
								<i className="fa fa-plus plus_icn" aria-hidden="true" />
								<input type="file" onChange={e => handleAddMedia(1, e.target.files[0])} />
							</div>
							<div className="cnp-snipt-img">
								<i className="fa fa-times cross" />
								<i className="fa fa-plus plus_icn" aria-hidden="true" />
								<input type="file" onChange={e => handleAddMedia(2, e.target.files[0])} />
							</div>

						</div>
					</div>
					<div className="ad-pernl-conts cnp-col mgtop0">
						<label htmlFor="text">
                  Add Press Release
						</label>
						<span className="cnp-file" role="button" onClick={handleAddPressRelease}>
							<i className="fa fa-plus" />
							<input type="file" placeholder="Client Website" />
							<span>No file Selected</span>
						</span>

					</div>
					<div className="ad-pernl-conts togle-switch">
						<p>Private</p>
						<label className="switch" htmlFor="private">
							<input type="checkbox" id="private" />
							<span className="slider round" />
						</label>
					</div>

					<div className="input_ranger">
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
			<div className="ad-pernl-conts mt-0">
				<span className="view-btn-rgt add-pernl-btn">
					<button type="button" className="btn new_pitch_btn snd-btn" onClick={changeNextScreen}>NEXT</button>
					<button type="button" className="btn new_pitch_btn disc-btn">SAVE TEMPLATE</button>
				</span>
			</div>
		</div>
	</div>
);

export default CreatePitch;
