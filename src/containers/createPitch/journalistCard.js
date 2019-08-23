import React from 'react';

const imagepath = require('../../../public/images/google.jpg');

const JournalistCard = ({
	selectedJournalists,
	addMessageForJournalist,
}) => selectedJournalists.map((selectedJournalist, key) => {
	const {
		full_name, id, personalMessage, position_data, company_data,
	} = selectedJournalist;
	return (
		<div className="add-pernl-info pt-1" key={id}>
			<div className="card_pro_row add-pernl-pro">
				<div className="pernl-pro-conts">
					<div className="card_pro_img">
						<img
							src={imagepath}
							alt="card_pro"
						/>
					</div>
					<div className="card_pro_contnt">
						<h3>
							{full_name}
							<span>{position_data[0].name}</span>
						</h3>
						<p>{company_data.name}</p>
					</div>
				</div>
			</div>
			<div className="add-pernl-text">
				<textarea
					rows="5"
					cols="50"
					value={personalMessage}
					placeholder="Add Personal Message (max. 200 Characters)"
					onChange={e => addMessageForJournalist(e, key)}
				/>
			</div>
		</div>
	);
});

export default JournalistCard;
