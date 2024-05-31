import React, { useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import IconHeart from './IconHeart';

const Gallery = () => {
  const { photos, toggleFavorite } = useContext(PhotoContext);

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map(photo => (
        <div key={photo.id} className="photo-card">
          <img src={photo.src.medium} alt={photo.alt} />
          <button className="icon-heart-btn" onClick={() => toggleFavorite(photo.id)}>
            <IconHeart filled={photo.liked} />
          </button>
          <div className="photo-alt-text">{photo.alt}</div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

