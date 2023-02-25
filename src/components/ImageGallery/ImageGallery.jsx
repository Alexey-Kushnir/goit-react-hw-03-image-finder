import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled.jsx';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = () => {
  return (
    <ImageGalleryList>
      {xxxx.map(({ xxx }) => {
        return <ImageGalleryItem src={id} alt={id} />;
      })}
    </ImageGalleryList>
  );
};

// Contact.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
