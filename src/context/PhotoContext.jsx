import React, { createContext, useState, useEffect } from 'react';

const PhotoContext = createContext();

const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('/photos.json')
      .then(response => response.json())
      .then(data => setPhotos(data.photos));
  }, []);

  const toggleFavorite = (id) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.id === id ? { ...photo, liked: !photo.liked } : photo
      )
    );

    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((photo) => photo.id === id);
      if (isFavorite) {
        return prevFavorites.filter((photo) => photo.id !== id);
      } else {
        const newFavorite = photos.find((photo) => photo.id === id);
        return [...prevFavorites, { ...newFavorite, liked: true }];
      }
    });
  };

  return (
    <PhotoContext.Provider value={{ photos, favorites, toggleFavorite }}>
      {children}
    </PhotoContext.Provider>
  );
};

export { PhotoContext, PhotoProvider };
