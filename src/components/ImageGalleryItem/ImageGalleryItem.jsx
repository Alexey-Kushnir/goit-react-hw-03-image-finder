import PropTypes from 'prop-types';
import { ImgGalleryItem, ImgGalleryItemImage } from './ImageGalleryItem.styled';
import { Modal } from './../Modal/Modal';

export const ImageGalleryItem = ({ id, smallImg, biglImg }) => {
  return (
    <ImgGalleryItem key={id}>
      <ImgGalleryItemImage src={smallImg} alt="" />
      {/* <Modal /> */}
    </ImgGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImg: PropTypes.string.isRequired,
  biglImg: PropTypes.string.isRequired,
};
