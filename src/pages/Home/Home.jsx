

import React, { useState, useEffect } from 'react';
import { getTrendMovies } from '../../api/ApiMovies';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './home.module.css'
import '../../index.css'

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';


const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTrendMovies();
        setTrendMovies(response.data.results);
        // console.log(response.data);        
      } catch (error) {
       
        toast.error('Помилка запиту !')
      }
    };

    fetchData();
  }, []);
   
  return (
    <div>
      <ToastContainer />
      <h2 className={css.trendMoviePageTitle}>Trending today</h2>
      <ul className={css.trendMovieList}>
        {trendMovies.map(movie => (
          <li className={css.movieItem} key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>
              <p className={css.movieTitle}>{movie.title || movie.name}</p>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultImg
                }
                // width={200}
                alt="poster"
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}; 

export default Home; 



