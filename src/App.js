import './App.css';
import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import AppLoader from 'components/Loader/AppLoader';
import { Modal } from 'components/Modal/Modal';
import { fetchImages } from 'services/api';
const API_KEY = '23531219-4793e7ad626a6d166b9f03b8c';
let pageNumber = 1;
class App extends Component {
  state = {
    hits: [],
    loading: false,
  };
  handleFormSubmit = images => {
    this.setState({ images });
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const data = await fetchImages();
      const { hits, total } = data;
      this.setState({ hits });
    } catch (error) {
      console.log('error', error);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { hits, loading } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {hits.length > 0 && <ImageGallery imgArray={hits} />}
        {/* { && <Button />} */}
        {loading && <AppLoader />} {/* <Modal /> */}
        <Button />
      </div>
    );
  }
}

export default App;
