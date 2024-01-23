// App.js
import React from 'react';
import "./App.css";

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Easy from "./easy.jsx";
import Medium from "./medium.jsx";
import Hard from "./hard.jsx";


ReactDOM.render(<App />, document.getElementById('root'));


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Easy</Link>
              </li>
              <li>
                <Link to="/medium">Medium</Link>
              </li>
              <li>
                <Link to="/hard">Hard</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Easy />} />
            <Route path="/medium/*" element={<Medium />} />
            <Route path="/hard" element={<Hard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
// 1.) Note:  Solutions should use class components. 

// EASY: Create a simple counter app using React hooks. Implement the buttons to Increment and 
// Decrement ton the counter value 


// import React from 'react';
// import CounterApp from './components/CounterApp';
// import './App.css'; // You can create this file for styling if needed

// function App() {
//   return (
//     <div className="App">
//       <CounterApp />
//     </div>
//   );
// }

// export default App;

//2.)MEDIUM: Program a movie search app with React hooks and React Router. Utilize an API to fetch movie data based on user search queries. Display search results and implement a detailed view for each movie.


// import React from 'react';
// import MovieSearchApp from './MovieSearchApp';
// const apiKey = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs';

// const fetchData = (url, searchTerm) => {
//   return fetch(url, {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: `Bearer ${apiKey}`,
//     },
//   })
//     .then((res) => res.json())
//     .catch((error) => {
//       throw new Error(`Error fetching data: ${error.message}`);
//     });
// };

// const getMovieDetails = (movieId, searchTerm) => {
//   const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`;
//   return fetchData(url, searchTerm);
// };

// export { fetchData, getMovieDetails };