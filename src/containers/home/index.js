import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './home';
import Modal from '../../components/modal';
import HELPER from '../../utils/helper';
import { getPrPitches } from '../../redux/actions/pitches';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = { isModalOpen: false };
	}

	componentDidMount() {
		console.log('iscomint11');
		if (this.isPr()) {
			console.log('iscomint');
			const { getPitches } = this.props;
			getPitches();
		}
	}


	// close modal
	handleModalClose = () => this.setState({ isModalOpen: false });

	// create new pitch
	createNewPitch = () => this.setState({ isModalOpen: true });

	isPr = () => {
		const { login: { data: { role } }, signup } = this.props;
		let type = role;
		if (!type) {
			type = signup.data.role;
		}
		if (HELPER.isPr(type)) {
			return true;
		}
		return false;
	};

	render() {
		const { isModalOpen } = this.state;
		return [
			<Modal key="modal" onClose={this.handleModalClose} isOpen={isModalOpen} autoClose>
				<p>Feature Coming Soon !</p>
				<div className="pop_btn">
					<button type="submit" className="btn btn-default green_bg_btn" onClick={this.handleModalClose}>
						<span>OK</span>
					</button>
				</div>
			</Modal>,
			<Home isPr={this.isPr()} {...this.props} {...this.state} key="home" createNewPitch={this.createNewPitch} />,
		];
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({
	getPitches: data => getPrPitches(data),
}, dispatch);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
