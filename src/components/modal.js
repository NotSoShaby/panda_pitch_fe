import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const CusModal = ({ children, isOpen, onClose }) => {
  return (
    <Modal show={isOpen} onHide={onClose} className={"cstm_modal"}>
      {children}
    </Modal>
  )
}

// props initialization ( default values )
CusModal.defaultProps = {
  isOpen: false,
  onClose: () => {},
};

// props type definition
CusModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};

// default importing
export default CusModal
