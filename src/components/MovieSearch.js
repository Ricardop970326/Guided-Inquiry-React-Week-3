import React, { useState } from 'react';
import axios from 'axios';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movieInfo, setMovieInfo] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/movies', {
        params: { movieName: searchTerm }
      });

      setMovieInfo(response.data.movieInfo);
      setSimilarMovies(response.data.similarMovies);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter movie title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {Object.keys(movieInfo).length !== 0 && (
        <div>
          <h2>{movieInfo.title}</h2>
          {movieInfo.poster && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster}`}
              alt="Movie Poster"
            />
          )}
          {movieInfo.releaseYear && <p>Year of Release: {movieInfo.releaseYear}</p>}
          {movieInfo.overview && <p>Overview: {movieInfo.overview}</p>}
        </div>
      )}
    {similarMovies.length > 0 && (
        <div>
          <h3>Similar Movies:</h3>
          {similarMovies.map(similarMovie => (
            <div key={similarMovie.title}>
              <h4>{similarMovie.title}</h4>
              {similarMovie.poster && (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${similarMovie.poster}`}
                  alt="Similar Movie Poster"
                />
              )}
              {similarMovie.releaseYear && <p>Year of Release: {similarMovie.releaseYear}</p>}
              {similarMovie.overview && <p>Overview: {similarMovie.overview}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieSearch;






// // src/components/MovieSearch.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const MovieSearch = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/index?movieid=${encodeURIComponent(searchTerm)}`);

//       if (response.data.error) {
//         setError(response.data.error);
//       } else {
//         setMovieDetails(response.data.movieInfo);
//         // setSimilarMovies(response.data.similarMovies);
//       }
//     } catch (error) {
//       console.error('Error:', error.message);
//       setError('An error occurred while fetching data.');
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//       <button onClick={handleSearch}>Search</button>

//       {error && <p>{error}</p>}

//       {movieDetails && (
//         <div>
//           <h2>{movieDetails.title}</h2>
//           <p>{movieDetails.overview}</p>
//           <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster}`} alt={movieDetails.title} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default MovieSearch;
