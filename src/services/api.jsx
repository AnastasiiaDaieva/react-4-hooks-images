const API_KEY = '23531219-4793e7ad626a6d166b9f03b8c';

const api = {
  pageNumber: 1,
  async fetchImages(searchQuery) {
    const url = `https://pixabay.com/api/?q=${searchQuery}&page=${this.pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    console.log(url);

    return await fetch(url)
      .then(response => {
        if (response.ok) {
          // console.log(response);
          return response.json();
        }
      })
      .then(data => {
        // console.log(data.hits);

        this.pageNumber += 1;

        return data;
      })
      .catch(error => console.log(error));
  },

  resetPageNumber() {
    this.pageNumber = 1;
  },
};

export default api;
