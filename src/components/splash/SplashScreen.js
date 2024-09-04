import React, { useState, useEffect } from "react";
import logo from "../../assets/popcorn.svg"
import './SplashScreen.css'

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000); // Set the delay to 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${showSplash ? "show" : "hide"}`}>
        <img src={logo} alt="" className="splash-flag" />
      <h1>HeirWolf Cinema</h1>
      <p>welcome to your number one stop for online movies!</p>

      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default SplashScreen;