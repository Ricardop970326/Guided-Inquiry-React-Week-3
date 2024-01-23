// SimilarMovies.js
import React from 'react';

const SimilarMovies = ({ similarMovies }) => {
  return (
    <div>
      <h3>Similar Movies</h3>
      <ul>
        {similarMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SimilarMovies;
