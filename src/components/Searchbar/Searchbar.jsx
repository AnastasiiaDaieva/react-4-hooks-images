import React, { Component } from 'react';
import s from 'components/Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  handleQueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchForm__button}>
            <span className={s.SearchForm__label}>Search</span>
          </button>

          <input
            className={s.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}

export { Searchbar };
