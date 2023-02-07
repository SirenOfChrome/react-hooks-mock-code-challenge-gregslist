import React from "react";

function ListingCard() {
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={"https://via.placehohttp://localhost:6001/listings"} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{"description"}</strong>
        <span> · {"location"}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

const handleToggleFavorite = (listing) => {
  setListings(prevListings => prevListings.map(l => {
    if (l.id === listing.id) {
      return { ...l, favorite: !l.favorite };
    }
    return l;
  }));
};

return (
  <div>
    {listings.map(listing => (
      <div key={listing.id}>
        <h3>{listing.description}</h3>
        <p>Location: {listing.location}</p>
        {listing.favorite ? (
          <button onClick={() => handleToggleFavorite(listing)}>Unfavorite</button>
        ) : (
          <button onClick={() => handleToggleFavorite(listing)}>Favorite</button>
        )}
      </div>
    ))}
  </div>
);




export default ListingCard;
