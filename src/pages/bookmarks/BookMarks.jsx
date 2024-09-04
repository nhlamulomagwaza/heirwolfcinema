import React from 'react'
import '../home/home.css'
import { useContext, useEffect } from 'react'
import { HeirWolfContext } from '../../store/AppContext';
import iconTvSeries from '../../assets/icon-category-tv.svg';
import iconMovie from '../../assets/icon-category-movie.svg';
import playIcon from '../../assets/icon-play.svg'
import { FaRegBookmark } from "react-icons/fa6";
import Search from '../../components/search/Search';
const BookMarks = () => {
    const {setContent, content, search,
       savedMovies, handleBookmarkClick}= useContext(HeirWolfContext);
    


    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('savedMovies')) || [];
       setContent(favorites);
      }, []);


      const bookmarks= content.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase()));



    return (
      <>
      <main>
       <Search/>
  
     
       <h1 className='titles recommend'>{search.length? `Found ${bookmarks.length} results for "${search}"` : "Bookmarks/Favorites"}</h1>
 
     {bookmarks.length? 
    
      <div className="movies-grid">
      
         {bookmarks.map(movie=>(
  
      <div className="movie-card">
       <div className="img-container">
       <img src={movie.thumbnail.regular.small}  alt="" className='thumbnail'/>
  
       <div className="card-hover-state">
       <div
              className={savedMovies.some((savedMovie) => savedMovie.title === movie.title)? 'state-two-active' : 'state-two'}
              id="state-two"
            >

      <FaRegBookmark
                id={savedMovies.some((savedMovie) => savedMovie.title === movie.title)? 'main-bookmark-active' : 'main-bookmark'}
                onClick={() => handleBookmarkClick(movie)}
              />
         
           </div>
        <div className="state-one">   <img src={playIcon} alt="" className="play" id='play' />
        <p>Play</p></div>
     
        </div>
      
       </div>
     
       <p className='movie-details'>{movie.year} &#x2022;<span>
        <img src={movie.category==="TV Series" ? iconTvSeries: iconMovie } alt="" />
        {movie.category}</span> &#x2022; {movie.rating}</p>
            <h1 className='movie-title'>{movie.title}</h1>
           
         
         
      </div>
     
    )
    )}
      </div> : <p style={{marginTop: '3rem'}}>start bookmarking movies to save them here</p>}
      
    </main>
  
  
  </>
    )
  }
  

export default BookMarks