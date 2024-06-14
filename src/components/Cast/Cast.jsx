import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCastById } from '../../api/ApiMovies'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './cast.module.css'
const Cast = () => {
    const { movieId } = useParams();
    const [castInfo, setCastInfo] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCastById(movieId);
        if (response.data && response.data.cast) {
          setCastInfo(response.data.cast);
          // console.log(response.data.cast);
        } else {
          toast.error('Отримано некоректні дані');
        }
      } catch (error) {
        toast.error('Помилка запиту');
      }
    };

    fetchData();
  }, [movieId]);


    // const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const defaultImg =
    'https://images.pexels.com/photos/6373499/pexels-photo-6373499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
 
    return (
      <ul className={css.castList}>
        <ToastContainer />
        {castInfo && castInfo.length > 0 ? (
          castInfo.map(cast => (
            <li key={cast.id} className={css.castItem}>
              <img
                className={css.castImage}
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : defaultImg
                }
                alt="poster"
              />
              <h2 className={css.castName}>{cast.name}</h2>
              <p className={css.castCharacter}>Character: {cast.character}</p>
            </li>
          ))
        ) : (
          <p className={css.noCastInfo}>No cast</p>
        )}
      </ul>
    );
}

export default Cast