import { useState } from 'react';

import ImageList from './components/ImageList';
import ImageShow from './components/ImageShow';
import SearchBar from './components/SearchBar';
import { searchImages } from './api';

function App() {
  const [input, setInput] = useState('');
  const [images, setImages] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (term) => {
    setImages(() => {
      searchImages(input);
    });
  };

  return (
    <div>
      <SearchBar
        input={input}
        handleInput={handleInput}
        onSubmit={handleSubmit}
      />
      {/* <ImageList input={input} list={searchImages(input)} />
       */}
      <ImageList list={images} />
    </div>
  );
}

export default App;
