import React from 'react';
import StatusBar from '../../components/statusBar';
import Select from '../../components/select';
import SearchBox from '../../components/searchbox';
import JournalistCard from './journalistCard';

const Personalization = ({
	steps, active, options, name, value, onChangeSelect, journalists,
	handlePrSelect, setVal, val, ...props
}) => (
	<div className="container cstm_container view-container add-persnl-container">
		<div className="ad-pernl-hdg">
			<h3>Add Personalisation</h3>
		</div>
		<StatusBar steps={steps} active={active} />
		<form>
			<div className="ad-pernl-conts">
				<label htmlFor="ss">
            Choose Media list
				</label>
				<Select
					options={options}
					name={name}
					value={value}
					onChange={onChangeSelect}
				/>
			</div>
			<div className="ad-pernl-conts">
				<label htmlFor="ddd">
            Add More Journalist
				</label>
				<SearchBox data={journalists} onSelect={handlePrSelect} setVal={setVal} val={val} />
			</div>
			<div className="ad-pernl-conts mt-0">
				<label htmlFor="sss">
            Add Personal Message for Journalist
				</label>
				<JournalistCard {...props} />
			</div>
			<div className="ad-pernl-conts mt-0">
				<span className="view-btn-rgt add-pernl-btn">
					<button type="button" className="btn new_pitch_btn disc-btn">BACK</button>
					<button type="button" className="btn new_pitch_btn snd-btn">NEXT</button>
					<button type="button" className="btn new_pitch_btn disc-btn">SAVE TEMPLATE</button>
				</span>
			</div>
		</form>
	</div>
);

export default Personalization;
