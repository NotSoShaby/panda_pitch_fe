import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './home';
import Modal from '../../components/modal';
import { getPrPitches, getPitchById } from '../../redux/actions/pitches';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = { isModalOpen: false, selectedPage: 0 };
	}

	componentDidMount() {
		this.getPitches(0);
	}

	getPitches = (page) => {
		const { login: { data } } = this.props;
		if (data) {
			const { getPitches } = this.props;
			getPitches({ pageSize: 10, isJournalist: data.isJournalist, page: (10 * page) });
			this.setState({ selectedPage: page });
		}
	};

	// close modal
	handleModalClose = () => this.setState({ isModalOpen: false });

	// create new pitch
	createNewPitch = () => {
		const { history: { push } } = this.props;
		push('/create_pitch');
	};

	// handle click on pitch card
	onPitchClick = (data) => {
		const { getPitchById } = this.props;
		const url = data.url.split('/');
		getPitchById(url[5]);
	};

	render() {
		const { isModalOpen } = this.state;
		const { login: { data } } = this.props;
		let isPr = true;
		if (data && data.isJournalist) {
			isPr = false;
		}
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
				isPr={isPr}
				{...this.props}
				{...this.state}
				key="home"
				createNewPitch={this.createNewPitch}
				onPageChange={this.getPitches}
				onPitchClick={this.onPitchClick}
			/>,
		];
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		getPitches: data => getPrPitches(data),
		getPitchById: data => getPitchById(data),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
