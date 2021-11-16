import React, { Component } from 'react';
import s from 'components/Modal/Modal.module.css';
import { createPortal } from 'react-dom';
const modalRoot = document.getElementById('modal-root');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });

    //   handleOverlayClick = e => {};
  }
  render() {
    const { modalSource, modalDescription } = this.props;
    return createPortal(
      <div className={s.Overlay} onClick={this.handleOverlayClick}>
        <div className={s.Modal}>
          <img src={modalSource} alt={modalDescription} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export { Modal };
