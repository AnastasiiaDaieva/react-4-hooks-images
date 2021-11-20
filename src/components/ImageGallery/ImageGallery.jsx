import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import s from 'components/ImageGallery/ImageGallery.module.css';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import AppLoader from 'components/Loader/AppLoader';
import fetchImages from 'services/fetchImages';

function OldImageGallery({ searchQuery }) {
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchImages(searchQuery).then(console.log);
    // .then(({ totalHits, hits }) => setHits({ hits }))
    // .catch(error => console.log(error))
    // .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* {loading && <AppLoader />}
          {totalHits === 0 && (
            <div>Nothing was found on {this.props.searchQuery}</div>
          )} */}
      <ul className={s.ImageGallery}>
        {/* {hits.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            source={webformatURL}
            description={tags}
            dataOriginal={largeImageURL}
          />
        ))} */}
      </ul>

      {hits.length > 0 && (
        <Button id="loadmore" onClick={this.loadMore}>
          Load more
        </Button>
      )}
    </>
  );
}

class ImageGallery extends Component {
  state = {
    hits: [],
    totalHits: '',
    loading: false,
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const newQuery = this.props.searchQuery;
    const prevPage = prevState.page;
    const newPage = this.state.page;

    if (prevQuery !== newQuery) {
      this.setState({ loading: true, hits: [], page: 1 });
      fetchImages(newQuery, newPage)
        .then(({ totalHits, hits }) => this.setState({ totalHits, hits }))
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }

    if (prevPage !== newPage) {
      fetchImages(prevQuery, this.state.page)
        .then(({ hits }) =>
          this.setState(prevState => ({
            hits: [...prevState.hits, ...hits],
          })),
        )
        .catch(error => console.log(error));
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { hits, loading, totalHits } = this.state;
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

        {hits.length > 0 && (
          <Button id="loadmore" onClick={this.loadMore}>
            Load more
          </Button>
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
};

export { ImageGallery };
