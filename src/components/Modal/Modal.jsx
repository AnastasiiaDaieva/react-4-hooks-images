import React, { Component } from 'react';
import s from 'components/Modal/Modal.module.css';
import { createPortal } from 'react-dom';
const modalRoot = document.getElementById('modal-root');
class Modal extends Component {
  render() {
    const { source, description } = this.props;
    return createPortal(
      <div className={s.Overlay} onClick={this.handleOverlayClick}>
        <div className={s.Modal}>
          <img src={source} alt={description} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export { Modal };
