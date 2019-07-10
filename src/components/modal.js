import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CusModal extends Component {
	// add listener in document
	componentDidMount = () => {
		document.addEventListener('mousedown', this.handleClickOutside);
	};

	// remove listener from document
	componentWillUnmount = () => {
		document.removeEventListener('mousedown', this.handleClickOutside);
	};

	// reference initialization
	setWrapperRef = (node) => {
		this.wrapperRef = node;
	};

	// handle outside click of modal
	handleClickOutside = (event) => {
		const { onClose, autoClose } = this.props;
		if (this.wrapperRef && !this.wrapperRef.contains(event.target) && autoClose) {
			onClose();
		}
	};

	render() {
		const { isOpen, children, className } = this.props;
		if (!isOpen) return null;
		return (
			<div className={`modal-open ${className}`}>
				<div className="modal fade cstm_modal in" id="myModal" role="dialog">
					<div className="modal-dialog" ref={this.setWrapperRef} id="modal">
						<div className="modal-content">
							<div className="modal-body">{children}</div>
						</div>
					</div>
				</div>
				<div className="modal-backdrop fade in" />
			</div>
		);
	}
}

// props initialization ( default values )
CusModal.defaultProps = {
	isOpen: false,
	autoClose: false,
	className: '',
	onClose: () => {},
};

// props type definition
CusModal.propTypes = {
	isOpen: PropTypes.bool,
	autoClose: PropTypes.bool,
	onClose: PropTypes.func,
	className: PropTypes.string,
};

// default importing
export default CusModal;
