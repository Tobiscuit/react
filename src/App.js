import { useState } from 'react';

import ImageList from './components/ImageList';
import ImageShow from './components/ImageShow';
import SearchBar from './components/SearchBar';
import { searchImages } from './api';

function App() {
  const handleSubmit = async (term) => {
    const results = await searchImages(term);

    console.log(results);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {/* <ImageList input={input} list={searchImages(input)} />
       */}
    </div>
  );
}

export default App;
