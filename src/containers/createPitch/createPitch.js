/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-indent */
import React from 'react';
import TinyMCE from 'react-tinymce';
import InputRangeSelector from '../../components/inputRange';
import SearchBox from '../../components/searchbox';
import AutoComplete from '../../components/autoComplete';
import StatusBar from '../../components/statusBar';
import METADATA from '../../utils/metadata';

// import Button from '../../components/button';
// import HELPER from '../../utils/helper';
// import IMAGES from '../../assets/images';

const { CTA, TOPICS } = METADATA;
// const { SEARCH_ICON } = IMAGES;
// const { PITCHES } = METADATA;

// const renderCreateButton = (val) => {
// 	console.log('entered');
// 	if (val !== '') {
// 		return <i className="fa fa-plus" aria-hidden="true" onClick={() => console.log(val)} />;
// 	}
// 	return null;
// };

const renderMediaFiles = (index, handleAddMedia) => (
	<div className="cnp-snipt-img">
		<i className="fa fa-plus plus_icn" aria-hidden="true" />
		<input type="file" onChange={e => handleAddMedia(index, e.target.files[0])} />
	</div>
);

const renderMediaImages = (index, mediaFile, handleRemoveMedia) => (
	<div className="cnp-snipt-img">
		<i className="fa fa-times cross" role="button" onClick={() => handleRemoveMedia(index)} />
		<img src={mediaFile} alt="mediaFiles" />
	</div>
);

const CreatePitch = ({
	steps,
	active,
	hideNewClientDiv,
	mediaFiles,
	pressReleaseImage,
	progressValue,
	handleAddNewClient,
	handleAddMedia,
	handleAddClientImage,
	handleAddPressRelease,
	onCreate,
	onTodoSelection,
	journalistInterests,
	getJournalistInterests,
	onRangeChange,
	changeNextScreen,
	journalists,
	handlePrSelect,
	setSearchValue,
	searchString,
	handlePrivate,
	handleRemoveMedia,
}) => (
	<div className="create_new_pitch_form">
		<div className="form_wrapper pitch_form_wraper">
			<div key="form1" className="step_form_col">
				<div className="slidecontainer">
					<div className="ad-pernl-hdg">
						<h2>Create	New	Pitch</h2>
					</div>
					<StatusBar steps={steps} active={active} />
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

					{!hideNewClientDiv ? (
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
					{hideNewClientDiv && (
						<div className="ad-pernl-conts cnp-col">
							<span className="cnp-file" role="button" onClick={handleAddNewClient}>
								<i className="fa fa-plus" />
								{/* <input type="file" placeholder="Client Website" /> */}
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
							boxes={CTA}
							onChange={getJournalistInterests}
						/>
					</div>
					<div className="full_widt">
						<h3>Headline (up to 50 characters)</h3>
						<div className="new_field">
							<input
								type="text"
								maxLength="50"
								placeholder="This should catch your attention and give the main idea of the pitch"
							/>

						</div>
					</div>
					<div className="full_widt pos_relative">
						<h3>The Pitch</h3>
						<div className="new_field cstm_editor">
							<TinyMCE
								content="Write your pitch here. Make sure you cover the main points."
								config={{
									plugins: 'autolink link image lists print preview',
									toolbar: 'undo redo | bold italic | alignleft aligncenter alignright',
									browser_spellcheck: true,
								}}
							// onChange={x => xxx(x)}
							/>
						</div>
						<div className="hint">
							<img src="images/bulb_icn.png" alt="alert" />
							<p>
								{' '}
								<b>
Hint:
									{' '}
								</b>
                  Write a general Pitch.Save Journalist Personalization for the Next Step!
							</p>
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
								boxes={TOPICS}
								onChange={getJournalistInterests}
							/>
						</div>
					</div>
					<div className="ad-pernl-conts add_media_col pos_relative">
						<label htmlFor="text">
								Add Media
						</label>
						<div className="cnp-snipt">
							{mediaFiles.map((media, index) => (
								media ? renderMediaImages(index, media, handleRemoveMedia)
									: renderMediaFiles(index, handleAddMedia)))}
						</div>
						<div className="hint">
							<img src="images/bulb_icn.png" alt="alert" />
							<p>
								{' '}
								<b>
Hint:
									{' '}
								</b>
                  Write a general Pitch.Save Journalist Personalization for the Next Step!
							</p>
						</div>
					</div>
					<div className="ad-pernl-conts cnp-col mgtop0">
						<label htmlFor="text">
								Add Press Release
						</label>
						<span className="cnp-file">
							<i className="fa fa-plus" />
							<input type="file" placeholder="Client Website" onChange={e => handleAddPressRelease(e)} />
							{!pressReleaseImage && <span>No file Selected</span>}
							{pressReleaseImage
									&& (
										<div className="cnp-snipt-img">
											<img src={pressReleaseImage} alt="pressReleaseImage" />
										</div>
									)}
						</span>

					</div>
					<div className="ad-pernl-conts togle-switch">
						<p>Private</p>
						<label className="switch" htmlFor="private">
							<input type="checkbox" id="private" onChange={e => handlePrivate(e)} />
							<span className="slider round" />
						</label>
					</div>

					<div className="input_ranger pos_relative">
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
						<div className="hint input_range_hint">
							<img src="images/bulb_icn.png" alt="alert" />
							<p>
								{' '}
								<b>
Hint:
									{' '}
								</b>
                  Write a general Pitch.Save Journalist Personalization for the Next Step!
							</p>
						</div>
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
