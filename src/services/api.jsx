const API_KEY = '23531219-4793e7ad626a6d166b9f03b8c';
let pageNumber = 1;

export async function fetchImages(searchQuery) {
  return await fetch(
    `https://pixabay.com/api/?q=cat&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      console.log(response);
      return response.json();
    }
    return Promise.reject(new Error(`Nothing was found on ${searchQuery}`));
  });
}

const api = {
  fetchImages,
};

export default api;
