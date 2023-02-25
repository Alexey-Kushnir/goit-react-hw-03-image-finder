import PropTypes from 'prop-types';
import { Overlay, ModalWindow, Image } from './Modal.styled';

export const Modal = ({ xxx }) => {
  return (
    <Overlay>
      <ModalWindow>
        <Image src="" alt="" />
      </ModalWindow>
    </Overlay>
  );
};

// Contact.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
