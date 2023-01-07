import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID D1aJF4l6Cu9Dex7lvNQjMrsq2ifgUHKs131vjmvdeyk',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export { searchImages };
