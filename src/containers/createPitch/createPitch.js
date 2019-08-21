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

const { CTA } = METADATA;

const renderMediaFiles = (index, handleAddMedia) => (
	<div className="cnp-snipt-img">
		<i className="fa fa-plus plus_icn" aria-hidden="true" />
		<input
			type="file"
			accept="image/png, image/jpeg"
			onChange={e => handleAddMedia(index, e.target.files[0])}
		/>
	</div>
);

const renderMediaImages = (index, mediaFile, handleRemoveMedia) => (
	<div className="cnp-snipt-img">
		<i
			className="fa fa-times cross"
			role="button"
			onClick={() => handleRemoveMedia(index)}
		/>
		<img src={mediaFile} alt="mediaFiles" />
	</div>
);

const CreatePitch = ({
	hideNewClientDiv,
	mediaFiles,
	pressReleaseImage,
	progressValue,
	handleAddNewClient,
	handleAddMedia,
	handleAddPressRelease,
	onCreate,
	onCTASelection,
	onSelectInterest,
	journalistInterests,
	getJournalistInterests,
	onCreateInterest,
	onRangeChange,
	changeNextScreen,
	clientAutoComplete: { data },
	handleClient,
	setSearchValue,
	searchString,
	handleRemoveMedia,
	allInterests,
	createClient,
	onChangeClientProperty,
	newClient: { image },
	saveScreenData,
	onChangeState,
	is_private,
	onChangeContent,
	content,
	title,
	errors,
	onLodingImgError,
}) => (
	<div className="create_new_pitch_form">
		<div className="form_wrapper pitch_form_wraper">
			<div key="form1" className="step_form_col">
				<div className="slidecontainer">
					<div className="ad-pernl-hdg">
						<h2>Create New Pitch</h2>
					</div>
					<StatusBar steps={3} active={1} />
					<div className="ad-pernl-conts">
						<label htmlFor="ddd">Client *</label>
						<SearchBox
							data={data}
							placeholder="Client"
							onSelect={handleClient}
							setSearchValue={setSearchValue}
							searchString={searchString}
						/>
						<div className="error">
							<p>{errors.selectedClient}</p>
						</div>
					</div>
					{!hideNewClientDiv ? (
						<div>
							<div className="two_dived_col">
								<div className="full_widt">
									<h3>Client Name *</h3>
									<div className="new_field">
										<input type="text" placeholder="Client Name" onChange={e => onChangeClientProperty('name', e.target.value)} />
										<div className="error">
											<p>{errors.clientName}</p>
										</div>
									</div>
								</div>
								<div className="full_widt">
									<h3>Client Website</h3>
									<div className="new_field">
										<input type="url" placeholder="Client Website" onChange={e => onChangeClientProperty('website', e.target.value)} />
										<div className="error">
											<p>{errors.clientWebSite}</p>
										</div>
									</div>
								</div>
							</div>

							<div className="ad-pernl-conts cnp-col">
								<h3>Add Client Logo</h3>
								<span
									className="cnp-file"
									role="button"
								>
									<i className="fa fa-plus" />
									<input
										type="file"
										placeholder="Client Website"
										accept="image/png, image/jpeg"
										onChange={e => onChangeClientProperty('image', e.target.files[0])}
									/>
									{image
										? <span>{image.name}</span>
										: <span>No file Chosen</span>}
								</span>
								<div className="error">
									<p>{errors.clientApiError || errors.clientLogo}</p>
								</div>
								<span className="view-btn-rgt add-pernl-btn cnp-col-btn">
									<button type="button" className="btn new_pitch_btn snd-btn" onClick={createClient}>
                      ADD CLIENT TO LIST
									</button>
								</span>
							</div>
						</div>
					) : (
						<div />
					)}
					<div className="ad-pernl-conts cnp-col">
						<span
							className="cnp-file"
							role="button"
							onClick={handleAddNewClient}
						>
							<i className={hideNewClientDiv ? 'fa fa-plus' : 'fa fa-minus'} />
							<span className="fnt_wght">{hideNewClientDiv ? 'Add New Client' : 'Don\'t want to add client now'}</span>
						</span>
					</div>
					<div>
						<h3>CTA (choose two) *</h3>
						<AutoComplete
							showTextBox={false}
							list={
								journalistInterests.data
                  && journalistInterests.data.data
                  && journalistInterests.data.data.results
							}
							onCreate={onCreate}
							onSelect={onCTASelection}
							boxes={CTA}
							maxLength={2}
							onChange={getJournalistInterests}
						/>
						<div className="error">
							<p>{errors.cta}</p>
						</div>
					</div>
					<div className="full_widt">
						<h3>Headline (up to 50 characters) *</h3>
						<div className="new_field">
							<input
								type="text"
								maxLength="50"
								name="title"
								value={title}
								onChange={onChangeState}
								placeholder="This should catch your attention and give the main idea of the pitch"
							/>
							<div className="error">
								<p>{errors.title}</p>
							</div>
						</div>
					</div>
					<div className="full_widt pos_relative">
						<h3>The Pitch</h3>
						<div className="new_field cstm_editor">
							<TinyMCE
								content={content}
								config={{
									plugins: 'autolink link image lists print preview',
									toolbar:
                      'undo redo | bold italic | alignleft aligncenter alignright',
									browser_spellcheck: true,
								}}
								onChange={x => onChangeContent(x)}
							/>
						</div>
						<div className="hint">
							<img src="images/bulb_icn.png" alt="alert" />
							<p>
								{' '}
								<b>Hint: </b>
                  Write a general Pitch.Save Journalist Personalization for the
                  Next Step!
							</p>
						</div>
					</div>
					<div className="full_widt top_mg">
						<h3>Add Topics *</h3>
						<div className="custom_field">
							<AutoComplete
								list={journalistInterests.data}
								onCreate={onCreateInterest}
								onSelect={onSelectInterest}
								boxes={allInterests}
								onChange={getJournalistInterests}
							/>
						</div>
						<div className="error">
							<p>{errors.allInterests}</p>
						</div>
					</div>
					<div className="ad-pernl-conts add_media_col pos_relative">
						<label htmlFor="text">Add Media</label>
						<div className="cnp-snipt">
							{mediaFiles.map((media, index) => (media
								? renderMediaImages(index, media, handleRemoveMedia)
								: renderMediaFiles(index, handleAddMedia)))}
						</div>
						<div className="error">
							<p>{errors.mediaImages}</p>
						</div>
						<div className="hint">
							<img src="images/bulb_icn.png" alt="alert" />
							<p>
								{' '}
								<b>Hint: </b>
                  Write a general Pitch.Save Journalist Personalization for the
                  Next Step!
							</p>
						</div>
					</div>
					<div className="ad-pernl-conts cnp-col mgtop0">
						<label htmlFor="text">Add Press Release</label>
						<span className="cnp-file">
							<i className="fa fa-plus" />
							<input
								type="file"
								placeholder="Client Website"
								onChange={e => handleAddPressRelease(e)}
							/>
							{!pressReleaseImage && <span>No file Selected</span>}
							{pressReleaseImage && (
								<div className="cnp-snipt-img">
									<img src={pressReleaseImage} onError={onLodingImgError} alt="pressReleaseImage" />
								</div>
							)}
							<div className="error">
								<p>{errors.pressRelease}</p>
							</div>
						</span>
					</div>
					<div className="ad-pernl-conts togle-switch">
						<p>Private</p>
						<label className="switch" htmlFor="private">
							<input
								type="checkbox"
								id="private"
								name="is_private"
								value={is_private}
								checked={is_private}
							/>
							<span className="slider round" />
						</label>
					</div>

					<div className="input_ranger pos_relative">
						<InputRangeSelector
							minValue={0}
							step={20 / 2}
							value={progressValue}
							maxValue={20}
							onChange={value => onRangeChange({
								value,
							})
							}
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
								<b>Hint: </b>
                  Write a general Pitch. Save Journalist Personalization for the
                  Next Step!
							</p>
						</div>
						<div className="error">
							<p>{errors.createPitchApiError}</p>
						</div>
						<div className="success">
							<p>{errors.createPitchApiSuccess}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="ad-pernl-conts mt-0">
				<span className="view-btn-rgt add-pernl-btn">
					<button
						type="button"
						className="btn new_pitch_btn snd-btn"
						onClick={changeNextScreen}
					>
              NEXT
					</button>
					<button type="button" onClick={saveScreenData} className="btn new_pitch_btn disc-btn">
              SAVE TEMPLATE
					</button>
				</span>
			</div>
		</div>
	</div>
);

export default CreatePitch;
