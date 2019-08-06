import React from 'react';
import Button from '../../components/button';
import SelectBox from '../../components/selectBox';
import AutoComplete from '../../components/autoComplete';
// import HELPER from '../../utils/helper';

// render form2
const Form3 = ({
	onSubmit,
	onChange,
	// outlet,
	// company,
	positions,
	twitter,
	linkedIn,
	role,
	// prProfile,
	error,
	prCompanies,
	createPrCompany,
	onCompanySelection,
	getPrCompanies,
	companiesList,
	createPosition,
	onPositionSelection,
	// onJrOutletSelection,
	positionList,
	getPositions,
	changeInput,
	onChangeSelect,
}) => [
	<div key="form2" className="step_form_col">
		<h2 className="mbot30">Tell us a little about yourself</h2>
		{(role === 'Journalist') ? (
			<div>
				<div className="full_widt">
					<div className="ad-pernl-conts mg_btm20 cstm_selec_row">
						<label htmlFor="ss">
							{/* Which outlets do you write for? */}
						</label>
						<h3>Which outlets do you write for?</h3>
						<div className="custom_field">
							<SelectBox
								options={prCompanies.data || []}
								labelName="name"
								changeInput={changeInput}
								onChangeSelect={onChangeSelect}
							/>
						</div>
					</div>
				</div>
				{error && error.outlet
						&& <div className="error">{error.outlet.map(msg => <p key={msg}>{msg}</p>)}</div>}
			</div>
		)
			: (
				<div>
					<div className="full_widt">
						<h3>What's your company name?</h3>
						<div className="custom_field">
							<AutoComplete
								list={
									prCompanies.data
										|| []
								}
								name="Company"
								onCreate={createPrCompany}
								onSelect={onCompanySelection}
								boxes={companiesList}
								onChange={getPrCompanies}
							/>
							{/* <label htmlFor="company">Company</label> */}
						</div>
					</div>
					{error && error.companiesList && <div className="error">{error.companiesList.map(msg => <p key={msg}>{msg}</p>)}</div>}
				</div>
			)}

		<div className="full_widt">
			<h3>What is your job position?</h3>
			<div className="custom_field">
				<AutoComplete
					list={
						positions.data
							|| []
					}
					name="Position"
					onCreate={createPosition}
					onSelect={onPositionSelection}
					boxes={positionList}
					onChange={getPositions}
				/>
			</div>
		</div>
		{error && error.allPositions && <div className="error">{error.allPositions.map(msg => <p key={msg}>{msg}</p>)}</div>}

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
				/>
				<label htmlFor="twitter">Twitter</label>
			</div>
		</div>
		{error && error.twitter && <div className="error">{error.twitter.map(msg => <p key={msg}>{msg}</p>)}</div>}
		{/* {HELPER.isErrorInApi(code) && prProfile.error.non_field_errors && (
        <div className="error">{prProfile.error.non_field_errors.map(msg =>
          <p key={msg}>{msg}</p>)}</div>
			)} */}

		<div className="step_btn_wrapper">
			{/* <Button className="white_bg_btn" onClick={onBack}>
					Back
				</Button> */}
			<Button className="green_bg_btn signup_btn_cntr" onClick={onSubmit}> Next </Button>
		</div>
	</div>,
];
export default Form3;
