const API_KEY = '23531219-4793e7ad626a6d166b9f03b8c';

export default async function fetchImages(searchQuery = '', pageNumber = 1) {
  let url = `https://pixabay.com/api/?q=${searchQuery}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  console.log(url);

  return await fetch(url)
    .then(response => {
      if (response.ok) {
        console.log('response', response);
        return response.json();
      }
    })
    .then(data => {
      console.log('hits,json', data.hits);

      return data;
    })
    .catch(error => console.log(error));
}
