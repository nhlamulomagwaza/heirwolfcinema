import React from 'react'
import './home.css'
import { useContext} from 'react'
import { HeirWolfContext } from '../../store/AppContext';
import iconTvSeries from '../../assets/icon-category-tv.svg';
import iconMovie from '../../assets/icon-category-movie.svg';
import playIcon from '../../assets/icon-play.svg'
import { FaRegBookmark } from "react-icons/fa6";
import Trending from '../../components/trending/Trending';
import Search from '../../components/search/Search';

const Home= () => {

  //const movies = films;
const {filteredFilms, search, savedMovies,
   handleBookmarkClick}= useContext(HeirWolfContext);
   
  return (
<>
    <main>
     <Search/>

     {search.length?  null : <Trending/>}
   
   
     <h1 className='titles recommend'>{search.length? `Found ${filteredFilms.length} results for "${search}"` : "Recommended For You"}</h1>

    <div className="movies-grid">
      {filteredFilms.map(movie=>(

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
    </div>
  </main>
</>
  )
}

export default Home
