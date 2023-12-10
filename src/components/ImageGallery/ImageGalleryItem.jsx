const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={image.webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={() => openModal(image.largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
