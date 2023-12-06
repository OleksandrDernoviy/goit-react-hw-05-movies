import { Route, Routes, } from "react-router-dom";
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

// import MovieDetails from '../pages/MovieDetails/MovieDetails';
// import Movies from "../pages/Movies/Movies";
// import NotFound from "../pages/NotFound/NotFound";
// import SharedLayout from "./SharedLayout/SharedLayout";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";
// import css from './App.module.css'



export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
      
};


