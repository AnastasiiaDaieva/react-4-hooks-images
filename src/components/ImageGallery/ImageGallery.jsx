import React, { Component } from 'react';
import s from 'components/ImageGallery/ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import api from 'services/api';
import { Button } from 'components/Button/Button';
import Loader from 'react-loader-spinner';

class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const newQuery = this.props.searchQuery;
    if (prevQuery !== newQuery) {
      this.setState({ loading: true });
      api
        .fetchImages(newQuery)
        .then(images => this.setState({ images }))
        .finally(() => this.setState({ loading: false }));
    } else {
      api.resetPageNumber();
    }
  }
  render() {
    const { images, loading } = this.state;
    return (
      <>
        {loading && (
          <Loader
            className={s.loader}
            type="TailSpin"
            color="#3f51b5"
            height={80}
            width={80}
            timeout={3000}
          />
        )}

        <ul className={s.ImageGallery}>
          {images.length === 0 && <div>Let's search some images!</div>}
          {images.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              source={webformatURL}
              description={tags}
              dataOriginal={largeImageURL}
            />
          ))}
        </ul>

        {images.length > 0 && (
          <Button onClick={() => api.fetchImages(this.props.searchQuery)}>
            Load more
          </Button>
        )}
      </>
    );
  }
}

export { ImageGallery };
