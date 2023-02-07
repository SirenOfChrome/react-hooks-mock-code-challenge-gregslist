import React, { useState, useEffect } from 'react';

const ListingsContainer = () => {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const filtered = listings.filter(listing =>
      listing.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredListings(filtered);
  }, [listings, searchTerm]);

  const handleSearch = event => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>
      <ul className="cards">
        {filteredListings.map(listing => (
          <li className="card" key={listing.id}>
            <div className="image">
              <img src={listing.image} alt={listing.description} />
            </div>
            <div className="details">
              <strong>{listing.description}</strong>
              <span> · {listing.location}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListingsContainer;
