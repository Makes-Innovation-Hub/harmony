import { useState } from 'react';
import Wrapped from './HomeSearchBarStyle.js';

const HomeSearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const inputHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const sendSearchRequest = () => {
    if (!searchTerm) {
      setErrorMessage('Please insert text in English, Hebrew, or Arabic');
      return;
    }

    fetch('http://localhost:5000/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchTerm }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('Search error:', error);
      });
  };

  return (
    <Wrapped>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          onChange={(e) => inputHandler(e)}
        />
        <button className="search-button" onClick={sendSearchRequest}>
          {/* ... */}
        </button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </Wrapped>
  );
};

export default HomeSearchBar;
