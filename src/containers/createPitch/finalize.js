import React from 'react';
import { PropTypes } from 'prop-types';
import StatusBar from '../../components/statusBar';

const imagepath = require('../../../public/images/google.jpg');

const FinalizePitch = ({ steps, active, changeToPreviousScreen }) => (

	<div className="create_new_pitch_form">
		<div className="form_wrapper pitch_form_wraper">
			<div className="ad-pernl-hdg">
				<h2>Finalize your Pitches</h2>
			</div>
			<StatusBar steps={steps} active={active} />
			<div className="ad-pernl-hdg">
				<div className="move-btn">
					<span className="click_pitch">Click on a pitch to edit the details</span>
					<div className="arrow_btn">
						<span>
							Previous
							<i className="fa fa-chevron-left" />
						</span>
						<span>
							<i className="fa fa-chevron-right" />
							Next
						</span>
					</div>
				</div>

				<div className="view-information padd">
					<div className="wrap_view">
						<div className="view-lft">
							<div className="view-pro">
								<div className="srch_pic">
									<img src={imagepath} alt="zzzzzz" />
								</div>
								<span className="pro_detail">
									<h3>
										Jim Hanson,
										<span className="side_contnt">Tech reporter</span>
									</h3>
									<p>Finn Partners</p>
								</span>
							</div>
							<div className="view-detail bdr_botm0">
								<h3>NEC and Samsung</h3>
								<p>
									Hi Tom - I loved the work you did in your recent article i thought
                                  this might be relevent to you

								</p>
							</div>

						</div>
						<div className="view-rgt">
							<p className="coverge">
Coverage
								{' '}
								<span>1:47 PM</span>
								{' '}
								<span>26/05/19</span>
							</p>
							<div className="pri-cont">
								<p className="mg">Private</p>
								<ul className="pri-link grey">
									<li><a href="ss">Food</a></li>
									<li><a href="ss">Heathcare</a></li>
									<li><a href="sss">Wearable</a></li>
								</ul>
							</div>

						</div>

					</div>

					<div className="finalize_contnt">
						<div className="view-conts">
							<h2>The Pitch</h2>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book. It has survived not
								only five centuries, but also the leap into electronic typesetting,
								remaining essentially unchanged. It was popularised in the 1960s with
								the release of Letraset sheets containing Lorem Ipsum passages, and more
								recently with desktop publishing software like Aldus PageMaker including
								versions of Lorem Ipsum.

							</p>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s, when an unknown printer took a galley of type
									and scrambled it to make a type specimen book. It has survived not
									only five centuries, but also the leap into electronic typesetting,
									remaining essentially unchanged. It was popularised in the 1960s with
										the release of Letraset sheets containing Lorem Ipsum passages, and
										more recently with desktop publishing software like Aldus PageMaker
										including versions of Lorem Ipsum.

							</p>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
								when an unknown printer took a galley of type and scrambled it to make a type
								specimen book.

							</p>
						</div>
						<div className="view-img">
							<img src={imagepath} alt="" />
						</div>

						<div className="dlete_icn_row">
							<i className="fa fa-trash" aria-hidden="true" />
						</div>

					</div>

				</div>

				<div className="view-btn">

					<span className="view-btn-rgt">
						<button type="button" className="btn new_pitch_btn disc-btn" onClick={changeToPreviousScreen}>Back</button>
						<button type="button" className="btn new_pitch_btn snd-btn">Send Pitches</button>
						<button type="button" className="btn new_pitch_btn disc-btn">Save Template</button>
					</span>
				</div>

			</div>
		</div>
	</div>


);

FinalizePitch.propTypes = {
	steps: PropTypes.number.isRequired,
	active: PropTypes.number.isRequired,
};

export default FinalizePitch;
