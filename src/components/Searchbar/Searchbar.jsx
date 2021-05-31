import s from './Searchbar.module.css';

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={s.SearchBar}>
      <form className={s.SearchForm} onSubmit={e => onSubmit(e)}>
        <button type="submit" className={s.SearchForm__button}>
          <span className="s.SearchForm-button-label"></span>
        </button>

        <input
          id="input-searchBar"
          className={s.SearchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default SearchBar;
