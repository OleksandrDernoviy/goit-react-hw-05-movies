
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../api/ApiMovies';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import css from './MovieDetails.module.css'
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
// import NotFound from '../NotFound/NotFound'


const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation(); 
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovieById(movieId);
        setMovieDetails(response.data);
        // console.log(response.data);
      } catch (error) {
        toast.error('Помилка запиту');
        console.error(error);
      }
    };

    fetchData();
  }, [movieId]);
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const navStyleMDetails = ({ isActive }) => `${isActive ? css.active : ''}`;
  let genres = '';

  if (movieDetails && movieDetails.genres) {
    genres = movieDetails.genres.map(genre => genre.name).join(', ');
  }

    return (
      <div>
        <div>
          <NavLink className={css.goBack} to={backLinkHref.current}>
            Go back
          </NavLink>
        </div>
        <ToastContainer />
        {movieDetails ? (
          <div>
            <div className={css.movieBox}>
              <div>
                <img
                  className={css.movieDetailsImg}
                  src={
                    movieDetails.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                      : defaultImg
                  }
                  alt="poster"
                  width={250}
                />
              </div>
              <div className={css.movieDescription}>
                <h2 className={css.movieTitleId}>
                  {movieDetails.title || movieDetails.name}
                </h2>
                <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
                <h2>Overview</h2>
                <p className={css.overview}>{movieDetails.overview}</p>
                <h2>Genre</h2>
                <p>{genres}</p>
              </div>
            </div>
            <div>
              <h2 className={css.aditInfoTitle}>Aditional information</h2>
              <div className={css.navBox}>
                <NavLink
                  to={`/movies/${movieDetails.id}/cast`}
                  className={navStyleMDetails}
                >
                  Cast
                </NavLink>
                <NavLink
                  to={`/movies/${movieDetails.id}/reviews`}
                  className={navStyleMDetails}
                >
                  Reviews
                </NavLink>
              </div>
            </div>
            <Outlet />
          </div>
        ) : (
          'Loading....'
          // <NotFound />
        )}
      </div>
    );
  



























    };

  export default MovieDetails;


  