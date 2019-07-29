import React, { useState } from 'react';
import Button from '../../components/button';
import AutoComplete from '../../components/autoComplete';
import StatusBar from '../signup/statusBar';
import InputRangeSelector from '../../components/inputRange';
import ToggleButton from '../../components/toggleButton';

const CreatePitch = ({
	client, name, website, onChange, addNewClick, onSubmit, onSelect, onRangeChange,
}) => {
	const [isClientFormVisible, toggleClientFormVisiblity] = useState(false);
	return (
		<div className="form_section">
			{/* <div className="form_logo">
				<img src={IMAGES.WHITE_LOGO} alt="" />
			</div> */}
			<div className="form_wrapper">
				{/* <div key="form1" className="step_form_col"> */}
				<div key="form2" className="step_form_col">
					<h2 className="mbot30">Create New Pitch</h2>
					<StatusBar steps={3} active={1} />
					<div>
						<div className="full_widt">
							<h3>Client</h3>
							<div className="custom_field">
								<input
									type="text"
									name="client"
									value={client || ''}
									id="client"
									placeholder="client"
									onChange={onChange}
								/>
								<label htmlFor="client">client</label>
							</div>
						</div>
						<div>
							{ isClientFormVisible && (
								<div>
									<div className="full_widt">
										<h3>Client Name</h3>
										<div className="custom_field">
											<input
												type="text"
												name="name"
												value={name || ''}
												id="name"
												placeholder="Client Name"
												onChange={onChange}
											/>
											<label htmlFor="client">client</label>
										</div>
									</div>
									<div className="full_widt">
										<h3>Client Website</h3>
										<div className="custom_field">
											<input
												type="text"
												name="website"
												value={website || ''}
												id="website"
												placeholder="Client Website"
												onChange={onChange}
											/>
											<label htmlFor="client">client</label>
										</div>
									</div>
									<div className="full_widt">
										<h3>Add Picture</h3>
										<div className="custom_field">
											<div style={{ marginTop: '15px', display: 'flex' }}>
												<span><i className="fa fa-plus" aria-hidden="true" onClick={() => addNewClick()} /></span>
												<span htmlFor="client" style={{ marginLeft: '15px' }}>No file selected</span>
											</div>
										</div>
									</div>
									<Button className="btn new_pitch_btn" onClick={onSubmit}> ADD NEW CLIENT </Button>
								</div>
							)}
							{!isClientFormVisible && (
								<div className="full_widt" role="button" onClick={() => toggleClientFormVisiblity(!isClientFormVisible)}>
									<h3>Add New Client</h3>
									<div className="custom_field">
										<div style={{ marginTop: '15px', display: 'flex' }}>
											<span><i className="fa fa-plus" aria-hidden="true" onClick={() => addNewClick()} /></span>
											<span htmlFor="client" style={{ marginLeft: '15px' }}>No file selected</span>
										</div>
									</div>
								</div>
							)}
							<div className="full_widt">
								<h3>CTA (choose two)</h3>
								<AutoComplete
									list={[]}
									showInput={false}
									onSelect={onSelect}
									boxes={[{ value: 'test', isActive: true }, { value: 'test1', isActive: false }]}
								/>
							</div>
							<div className="full_widt">
								<h3>Heading (up to 50 characters)</h3>
								<div className="custom_field">
									<input
										type="text"
										name="heading"
										value={client || ''}
										id="heading"
										placeholder="heading"
										onChange={onChange}
									/>
									<label htmlFor="heading">This should catch your attention</label>
								</div>
							</div>
							<div className="full_widt">
								<h3>The Pitch</h3>
								<div className="custom_field">
									<input
										type="text"
										name="heading"
										value={client || ''}
										id="heading"
										placeholder="heading"
										onChange={onChange}
									/>
									<label htmlFor="heading">The Pitch</label>
								</div>
							</div>
							<div className="full_widt">
								<h3>Add Topics</h3>
								<AutoComplete
									list={[]}
									// showInput={false}
									onSelect={onSelect}
									boxes={[{ value: 'Travel', isActive: false }, { value: 'Food', isActive: false }, { value: 'Leisure', isActive: false }, { value: 'Healthcare', isActive: false }, { value: 'Technology', isActive: false }]}
								/>
							</div>
							<div className="full_widt">
								<h3>Add Media</h3>

							</div>
							<div className="full_widt">
								<h3>Add Press Release</h3>
								<div className="custom_field">
									<div style={{ marginTop: '15px', display: 'flex' }}>
										<span><i className="fa fa-plus" aria-hidden="true" onClick={() => addNewClick()} /></span>
										<span htmlFor="client" style={{ marginLeft: '15px' }}>No file selected</span>
									</div>
								</div>
							</div>
							<div className="slidecontainer">
								<ToggleButton
									minValue={0}
									step={1}
									value={10}
									maxValue={10}
									onChange={value => onRangeChange(value)}
								/>
							</div>
							<div className="slidecontainer">
								<InputRangeSelector
									minValue={0}
									step={40 / 2}
									value={10}
									maxValue={40}
									onChange={value => onRangeChange(value)}
								/>
								<ul className="range_list">
									<li>Regular</li>
									<li>Embargo</li>
									<li>Exclusive</li>
								</ul>
							</div>
							{/* <div className="full_widt">
							<InputRangeSelector
								formatLabel={value => `${value}cm`}
								minValue={0}
								step={40 / 4}
								value={10}
								maxValue={40}
								onChange={value => onRangeChange(value)}
							/> */}
							{/* </div> */}
							<div className="step_btn_wrapper">
								<Button type="submit" className="white_bg_btn" onClick={onSubmit}>NEXT</Button>
								<Button type="submit" className="green_bg_btn" onClick={onSubmit}>SAVE TEMPLATE</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	// </div>
	);
};

export default CreatePitch;
