import React, { Component } from 'react';
import s from 'components/ImageGallery/ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { imgArray } = this.props;
    return (
      <ul className={s.ImageGallery}>
        {imgArray.map(({ id, webformatURL, tags }) => (
          <ImageGalleryItem key={id} source={webformatURL} description={tags} />
        ))}
      </ul>
    );
  }
}

export { ImageGallery };
