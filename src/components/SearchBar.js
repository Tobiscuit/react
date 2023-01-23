
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
function SearchBar() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('I need to tell the parent about some data.');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
        <input />

      </form>
    </div>
  );
}

export default SearchBar;
