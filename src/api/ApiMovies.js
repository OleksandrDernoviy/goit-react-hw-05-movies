import axios from "axios";
const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = 'ab383fb4029c9becd04a1d5c10db25f1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjM4M2ZiNDAyOWM5YmVjZDA0YTFkNWMxMGRiMjVmMSIsInN1YiI6IjY1Njg3MTkwNjgwYmU4MDBjNmUwZGY4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0yBTLZfzHtErfzDPvpPP0-1Yv51vf4xtsFUINYRp_-s',
  },
};



export const getTrendMovies = () => {
  return axios.get(`${ BASE_URL }/trending/all/day?language=en-US`, options);
  
}

// export const getTrendMovies = () => {
//   return axios.get(`${BASE_URL}/movie/popular`, options);
// };


export const getMovieById = movieId => {
  return axios.get(`${BASE_URL}/movie/${movieId}?language=en-US`, options);
};

export const getMovieByQuery =(query)  => {
  return axios.get(`${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
}

export const getCastById = movieId => {
  return axios.get(`${BASE_URL}/movie/${movieId}/credits`, options);
};

export const getReviewById = movieId => {
  return axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options);
};


