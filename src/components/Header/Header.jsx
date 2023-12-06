
// import Movies from "components/Pages/Movies/Movies";
import { Link, NavLink } from "react-router-dom";
import css from './header.module.css'
import '../../index.css'
 


const Header = () => {
  const navStyleHeader = ({ isActive }) => `${isActive ? css.active : ''}`
  return (
    <header className={css.header}>
      <Link to="/">
        <div className={css.headerLogo}>TMDB</div>
      </Link>
      <nav className={css.headerNav}>
        <NavLink className={navStyleHeader} to="/">
          Home
        </NavLink>
        <NavLink className={navStyleHeader} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

export default Header



