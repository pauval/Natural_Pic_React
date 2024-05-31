import React, { useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext';

const Favorites = () => {
  const { favorites, toggleFavorite } = useContext(PhotoContext);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favorites.map(photo => (
          <div key={photo.id} className="photo-card">
            <img src={photo.src.medium} alt={photo.alt} />
            <div className="photo-alt-text">{photo.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
