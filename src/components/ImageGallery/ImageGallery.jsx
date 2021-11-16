import React, { Component } from 'react';
import s from 'components/ImageGallery/ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import api from 'services/api';
import { Button } from 'components/Button/Button';
import AppLoader from 'components/Loader/AppLoader';
class ImageGallery extends Component {
  state = {
    hits: [],
    totalHits: '',
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const newQuery = this.props.searchQuery;
    if (prevQuery !== newQuery) {
      this.setState({ loading: true, hits: [] });
      api
        .fetchImages(newQuery)
        .then(({ totalHits, hits }) => this.setState({ totalHits, hits }))
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));
    } else {
      api.resetPageNumber();
    }
  }
  render() {
    const { hits, loading, totalHits } = this.state;
    const { onClick } = this.props;
    return (
      <>
        {loading && <AppLoader />}
        {totalHits === 0 && (
          <div>Nothing was found on {this.props.searchQuery}</div>
        )}
        <ul className={s.ImageGallery}>
          {hits.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              source={webformatURL}
              description={tags}
              dataOriginal={largeImageURL}
            />
          ))}
        </ul>

        {hits.length > 0 && <Button onClick={onClick}>Load more</Button>}
      </>
    );
  }
}

export { ImageGallery };
