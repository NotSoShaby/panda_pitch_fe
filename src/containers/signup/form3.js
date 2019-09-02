import React from 'react';
import Button from '../../components/button';
import SearchBox from '../../components/searchbox';

// render form2
const Form3 = ({
	onSubmit,
	onChange,
	positions,
	twitter,
	linkedIn,
	role,
	error,
	prCompanies,
	companyString,
	createPrCompany,
	onCompanySelection,
	filterCompany,
	filterPosition,
	createPosition,
	onPositionSelection,
	positionString,
	onKeyPress,
}) => [
	<div key="form2" className="step_form_col">
		<h2 className="mbot30">Tell us a little about yourself</h2>
		<div>
			<div className="full_widt ">
				<h3 className="mg0">
					{(role === 'Journalist')
						? 'Which outlets do you write for?'
						: "What's your company name?"}

				</h3>
				<div className="custom_field cstm_drop_down">
					<SearchBox
						showCreateButton
						data={prCompanies.data || []}
						onSelect={onCompanySelection}
						value={companyString}
						placeholder="Search for Company"
						setSearchValue={filterCompany}
						searchString={companyString}
						onCreate={createPrCompany}
					/>
				</div>
			</div>
			{error && error.companiesList && <div className="error">{error.companiesList.map(msg => <p key={msg}>{msg}</p>)}</div>}
		</div>

		<div className="full_widt">
			<h3 className="mg0">What is your job position?</h3>
			<div className="custom_field cstm_drop_down">
				<SearchBox
					showCreateButton
					data={positions.data || []}
					onSelect={onPositionSelection}
					value={positionString}
					placeholder="Search for Position"
					setSearchValue={filterPosition}
					searchString={positionString}
					onCreate={createPosition}
				/>
			</div>
		</div>
		{error && error.positionList && <div className="error">{error.positionList.map(msg => <p key={msg}>{msg}</p>)}</div>}

		<div className="full_widt mbot_zero">
			<h3>Add social media</h3>
			{(role === 'Pr') && (
				<div className="custom_field">
					<input
						type="text"
						name="linkedIn"
						value={linkedIn || ''}
						id="linkedIn"
						placeholder="linkedIn Name"
						onChange={onChange}
					/>
					<label htmlFor="linkedIn">LinkedIn</label>
				</div>
			)}
			{error && error.linkedIn && <div className="error">{error.linkedIn.map(msg => <p key={msg}>{msg}</p>)}</div>}
			<div className="custom_field">
				<input
					type="text"
					name="twitter"
					value={twitter || ''}
					id="twitter"
					placeholder="Twitter Name"
					onChange={onChange}
					onKeyPress={onKeyPress}
				/>
				<label htmlFor="twitter">Twitter</label>
			</div>
		</div>
		{error && error.twitter && <div className="error">{error.twitter.map(msg => <p key={msg}>{msg}</p>)}</div>}
		<div className="step_btn_wrapper">
			<Button type="submit" className="green_bg_btn signup_btn_cntr" onClick={onSubmit}> Next </Button>
		</div>
	</div>,
];
export default Form3;
