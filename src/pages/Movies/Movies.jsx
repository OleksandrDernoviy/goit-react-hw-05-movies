
import SearchBar from '../../components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { getMovieByQuery } from '../../api/ApiMovies';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './movies.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const [savedMovies, setSavedMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query')
  const location = useLocation();
  // console.log('location', location);  
   

  useEffect(() => {
     
    if (query) {
      getMovieByQuery(query)
        .then(response => {
          setSavedMovies(response.data.results);
        })
        // .catch(error => {
        //   console.error('Помилка при отриманні фільмів', error)
        //   toast.error('Помилка запиту')
        // })
    }
    }, [query])


const onSubmit = inputQuery => {
  setSearchParams({query: inputQuery });

    getMovieByQuery(inputQuery)
      .then(response => {
        setSavedMovies(response.data.results);
      })
      .catch(error => {
        console.error('Помилка при отриманні фільмів', error);
        toast.error('Помилка запиту');
      });
  };
const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  
  return (
    <div>
      <SearchBar submit={onSubmit} />
      <ToastContainer />
      <h2 className={css.searchMoviePageTitle}>Search movie</h2>
      <ul className={css.movieList}>
        {savedMovies &&
          savedMovies.map(movie => (
            <li key={movie.id} className={css.movieItem}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <img
                  className={css.movieImage}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : defaultImg
                  }
                  alt="poster"
                />
                <h2 className={css.movieTitle}>{movie.title}</h2>
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );

                }                
export default Movies;



