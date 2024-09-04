import films from '../assets/data.json'
import React, { useState, useEffect } from 'react'
export const HeirWolfContext= React.createContext();


const AppContext = ({children}) => {
 



  const [search, setSearch]= useState('');
  const filteredFilms = films.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase()));
    const [isActive, setIsActive] = useState(false);

    const [activeMovieId, setActiveMovieId] = useState(null);

     const [savedMovies, setSavedMovies] = useState([]);

    useEffect(() => {
      const savedMoviesFromStorage = JSON.parse(localStorage.getItem('savedMovies'));
      if (savedMoviesFromStorage) {
        setSavedMovies(savedMoviesFromStorage);
      }
    }, []);
   
  const saveToStorage = (updatedSavedMovies) => {
    setSavedMovies(updatedSavedMovies);
    localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
  };
  const [content, setContent]= useState(  savedMovies.length > 0? savedMovies : filteredFilms);
  
  const handleBookmarkClick = (movie) => {
    const isSaved = savedMovies.some((savedMovie) => savedMovie.title === movie.title);

    if (isSaved) {
      const updatedSavedMovies = savedMovies.filter((savedMovie) => savedMovie.title!== movie.title);
      saveToStorage(updatedSavedMovies);
      alert('Removed from favorites!');
    } else {
      saveToStorage([...savedMovies, movie]);
      alert('Added to favorites!');
    }
  };
  return (
       <HeirWolfContext.Provider value={{films, search,setSearch,
        filteredFilms, isActive, setIsActive, activeMovieId, setActiveMovieId, saveToStorage, content,
        setContent, savedMovies, setSavedMovies, handleBookmarkClick}}>
        {children}
       </HeirWolfContext.Provider>
      )
}

export default AppContext