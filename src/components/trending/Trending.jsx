import React, { useContext, useRef } from 'react'
import { HeirWolfContext } from '../../store/AppContext';
import { FaArrowAltCircleRight } from "react-icons/fa";
import iconTvSeries from '../../assets/icon-category-tv.svg';
import iconMovie from '../../assets/icon-category-movie.svg';
import playIcon from '../../assets/icon-play.svg'

import { FaRegBookmark } from "react-icons/fa6";
 import './trending.css'

 import { FaArrowAltCircleLeft } from "react-icons/fa";
const Trending = () => {
  
  const containerRef = useRef(null);

const handleScroll = (scrollOffset) => {
  containerRef.current.scrollLeft += scrollOffset;
};


    const {filteredFilms, handleBookmarkClick, savedMovies}= useContext(HeirWolfContext);
    const trendingMovies = filteredFilms.filter((movie) => movie.isTrending===true);
  return (
    <div className="trending-container" >

   <h1 className='titles trend'>Trending</h1>

      <button className="prev-button" onClick={() => handleScroll(-100)}><FaArrowAltCircleLeft size={26} /></button>
  
   <div className="trending-grid" ref={containerRef}>
    
    
  {trendingMovies.map(movie=>(

    <div className="movie-card">
     <div className="img-container-trending">
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
    
     
       <div className="movie-details-trending-container">
     <p className='movie-details-trending'>{movie.year} &#x2022;<span>
      <img src={movie.category==="TV Series" ? iconTvSeries: iconMovie } alt="" />
      {movie.category}</span> &#x2022; {movie.rating}</p>
          <h1 className='movie-title-trending'>{movie.title}</h1>
          </div>
          </div>
       
       
    </div>
   
  )
  )}
    </div>
    

    <button className="next-button" onClick={() => handleScroll(100)}><FaArrowAltCircleRight size={26} color='red' /></button>
    
   
   </div>
  )
}

export default Trending