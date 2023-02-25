import PropTypes from 'prop-types';
import { ImgGalleryItem, ImgGalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ xxx, xxx }) => {
  return (
    <ImgGalleryItem key={id}>
      <ImgGalleryItemImage src={'xxx'} alt={'xxx'} />
    </ImgGalleryItem>
  );
};

// Contact.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
