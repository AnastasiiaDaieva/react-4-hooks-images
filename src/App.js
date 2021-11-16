import './App.css';
import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import api from 'services/api';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  state = {
    searchQuery: '',
  };
  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
    console.log(searchQuery);
  };

  // handleQueryChange = e => {
  //   this.setState({ searchQuery: ?});
  // };

  render() {
    const { searchQuery } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          searchQuery={searchQuery}
          onClick={this.handleQueryChange}
        />
        <ToastContainer />
      </div>
    );
  }
}

export default App;