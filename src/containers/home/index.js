import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HOME from './home';
import Modal from '../../components/modal';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = { isModalOpen: false };
	}

	// close modal
	handleModalClose = () => this.setState({ isModalOpen: false });

	// create new pitch
	createNewPitch = () => this.setState({ isModalOpen: true });

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
			<HOME key="home" createNewPitch={this.createNewPitch} />,
		];
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
