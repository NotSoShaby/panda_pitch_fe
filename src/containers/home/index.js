import React, { Component } from 'react';
import HOME from './home';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from '../../components/modal';

class Index extends Component {
  state={
    isModalOpen:false,
  }

  // close modal
  handleModalClose = () => {
    this.setState({isModalOpen:false});
  }

  // create new pitch
  createNewPitch = () => {
    this.setState({isModalOpen:true})
  }

	render() {
    let { isModalOpen } = this.state;
		return [
      <Modal onClose={this.handleModalClose} isOpen={isModalOpen} autoClose>
        <p>Feature Coming Soon !</p>
        <div className="pop_btn">
          <button type="submit" className="btn btn-default green_bg_btn" onClick={this.handleModalClose}>OK</button>
        </div>
      </Modal>,
      <HOME createNewPitch={this.createNewPitch}/>
    ];
	}
}

const mapStateToProps = (state) => {
	return {
		...state
	};
};

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
		},
		dispatch
	);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
