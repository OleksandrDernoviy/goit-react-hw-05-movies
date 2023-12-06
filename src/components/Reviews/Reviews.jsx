import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewById } from '../../api/ApiMovies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './reviews.module.css'

const Reviews = () => {
const { movieId } = useParams();
  const [reviewInfo, setReviewInfo] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getReviewById(movieId);
        if (response.data && response.data.results) {
          setReviewInfo(response.data.results);
          // console.log(response.data.results);
        } else {
          toast.error('Отримано некоректні дані');
        }
      } catch (error) {
        toast.error('Помилка запиту');
      }
    };

    fetchData();
  }, [movieId]);


  
  return (
    <ul className={css.reviewList}>
      <ToastContainer />
      {reviewInfo && reviewInfo.length > 0 ? (
  reviewInfo.map((review) => (
          <li key={review.id} className={css.rewiewItem}>
            <h2 className={css.rewiewAuthor}>{review.author}</h2>
            <p className={css.rewiewContent}>{review.content}</p>
          </li>
  ))
      ) : (
          <p className={css.noReviews}>No reviews</p>
     ) }
    </ul>
  );
  
};

export default Reviews;
