import s from './ImageGallery.module.css';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';
const ImageGallery = ({ dataFetch, onClickImg }) => {
  return (
    <ul
      key="img_gallery"
      className={s.ImageGallery}
      onClick={e => onClickImg(e)}
    >
      {dataFetch.length > 0 &&
        dataFetch.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        ))}
    </ul>
  );
};
export default ImageGallery;
