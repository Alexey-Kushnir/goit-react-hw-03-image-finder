import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow, Image } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.closeModal);
  }

  render() {
    return (
      <Overlay onClick={this.props.closeModal}>
        <ModalWindow>
          <Image src={this.props.img} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
