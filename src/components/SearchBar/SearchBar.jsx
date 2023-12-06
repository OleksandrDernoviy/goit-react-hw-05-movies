import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import css from './searchBar.module.css'


const SearchBar = ({submit}) => {
    const [query, setQuery] = useState('');
    const handleSubmit = event => {               
        event.preventDefault();

       if (query.trim() === '') {
         toast('Ви нічого не ввели.');
         return;
       }
        submit(query); 
        // submit({ query });
       setQuery('');     
     };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <ToastContainer />
      <input
        name="query"
        className={css.inputForm}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit" className={css.searchBtn}>
        <span className="button-label">Search</span>
      </button>
    </form>
  );
}



export default SearchBar


