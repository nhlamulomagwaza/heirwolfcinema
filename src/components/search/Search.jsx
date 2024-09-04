import React, { useContext } from 'react'
import { HeirWolfContext } from '../../store/AppContext'
import './search.css'
import { IoMdSearch } from "react-icons/io";
import { useLocation } from 'react-router-dom';
const Search = () => {

    const {search, setSearch}= useContext(HeirWolfContext);
    const location = useLocation();
    let placeholder;
  switch (location.pathname) {
    case '/movies':
      placeholder = 'Search for Movies';
      break;
    case '/series':
      placeholder = 'Search for TV series';
      break;
    case '/bookmarks':
      placeholder = 'Search for Saved Content';
      break;
    default:
      placeholder = 'Search for Movies or TV series';
      break;
  }
  return (
    <>

    <div className="search-container">
    <IoMdSearch className='search-icon' size={33}/>
    <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}
      placeholder={placeholder}
      className='search'/>
    </div>
    
    </>
  )
}

export default Search