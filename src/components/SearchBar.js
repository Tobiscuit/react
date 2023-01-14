<<<<<<< HEAD
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
=======
function SearchBar() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('I need to tell the parent about some data.');
>>>>>>> a42f16595d907b2e9b1b14f044837e07076f9235
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
<<<<<<< HEAD
        <input value={term} onChange={handleChange} />
=======
        <input />
>>>>>>> a42f16595d907b2e9b1b14f044837e07076f9235
      </form>
    </div>
  );
}

export default SearchBar;
