import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './home';
import Modal from '../../components/modal';
// import HELPER from '../../utils/helper';
import { getPrPitches } from '../../redux/actions/pitches';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = { isModalOpen: false };
	}

	componentDidMount() {
		this.getPitches(1);
	}

	getPitches = (page) => {
		const { login: { data: { isJournalist } } } = this.props;
		if (!isJournalist) {
			const { getPitches } = this.props;
			const prId = 1;
			// if (data.role) { role = data.role; } else role = signup.data.role;
			getPitches({ pageSize: 10, prId, page });
		}
	}

	// close modal
	handleModalClose = () => this.setState({ isModalOpen: false });

	// create new pitch
	createNewPitch = () => {
		const { history: { push } } = this.props;
		push('/create_pitch');
	}

	// this.setState({ isModalOpen: true });

	// isPr = () => {
	// 	const { login: { data: { user } } } = this.props;

	// 	if (user && user.is_pr) {
	// 		return true;
	// 	}
	// 	return false;
	// };

	render() {
		const { isModalOpen } = this.state;
		const { login: { data: { isJournalist } } } = this.props;
		return [
			<Modal key="modal" onClose={this.handleModalClose} isOpen={isModalOpen} autoClose>
				<p>Feature Coming Soon !</p>
				<div className="pop_btn">
					<button type="submit" className="btn btn-default green_bg_btn" onClick={this.handleModalClose}>
						<span>OK</span>
					</button>
				</div>
			</Modal>,
			<Home
				isPr={!isJournalist}
				{...this.props}
				{...this.state}
				key="home"
				createNewPitch={this.createNewPitch}
				onPageChange={this.getPitches}
			/>,
		];
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({
	getPitches: data => getPrPitches(data),
}, dispatch);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
