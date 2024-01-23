const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.get('/api/movies', async (req, res) => {
    try {
      const searchTerm = req.query.movieName;
  
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          query: searchTerm,
          include_adult: false,
          language: 'en-US',
          page: 1,
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs',  // Replace with your actual API key
        },
      });
  
      console.log('Response Data:', response.data.results[0]);

    const movieInfo = {
      title: response.data.results[0].title,
      overview: response.data.results[0].overview,
      poster: response.data.results[0].poster_path,
      releaseYear: response.data.results[0].release_date.split('-')[0], // Extract the year from release_date
    };

    // Fetch similar movies
    const similarResponse = await axios.get(`https://api.themoviedb.org/3/movie/${response.data.results[0].id}/similar`, {
      params: {
        language: 'en-US',
        page: 1,
      },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs',  // Replace with your actual API key
      },
    });

    const similarMovies = similarResponse.data.results.map(similarMovie => ({
      title: similarMovie.title,
      overview: similarMovie.overview,
      poster: similarMovie.poster_path,
      releaseYear: similarMovie.release_date.split('-')[0],
    }));

    res.json({
      movieInfo,
      similarMovies,
    });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});