
import { Navbar } from './components/navbar/Navbar.jsx';
import Home from './pages/home/home.jsx';
import Movies from './pages/movies/Movies.jsx';
import AppContext from './store/AppContext.js';
import { Route, Routes } from 'react-router-dom';
import { Series } from './pages/series/Series.jsx';
import BookMarks from './pages/bookmarks/BookMarks.jsx';
import SplashScreen from './components/splash/SplashScreen.js';
import React from 'react';


function App() {

  return (
    <>

<SplashScreen/>


       <AppContext>
       <Navbar />
      <Routes>
        
     

<Route exact path='/' element={<Home />} />
<Route exact path='/movies' element={<Movies />} />
<Route exact path='/series' element={<Series />} />
<Route exact path='/bookmarks' element={<BookMarks />} />
</Routes>
       
        </AppContext>

    </>
    
  );
}

export default App;
