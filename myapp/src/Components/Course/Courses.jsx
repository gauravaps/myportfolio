import { Link } from "react-router-dom";
import Sdata from "../../Sdata";
import React, { useState } from 'react';
import './style.css';


 

const Courses = () => {
  const [fullScreen, setFullScreen] = useState({ isActive: false, imgSrc: "" });

  const handleFullScreen = (imgSrc) => {
    setFullScreen({ isActive: true, imgSrc });
  };

  const handleCloseFullScreen = () => {
    setFullScreen({ isActive: false, imgSrc: "" });
  };

  return (
    <div className="main-div">
      {
        Sdata.map((val, ind) => {
          return (
            <div key={ind} className="card">
              <img className="img" src={val.imgscr} alt="showpixel" />
              <Link className="link-course"> 
              <p className="title">{val.title}</p>
              </Link>
              <button className="btn" onClick={() => handleFullScreen(val.imgscr)}>Full Screen</button>
            </div>
          );
        })
      }

      {/* Full-screen modal */}
      {fullScreen.isActive && (
        <div className="full-screen-overlay">
          <img className="full-screen-img" src={fullScreen.imgSrc} alt="Full screen" />
          <button className="close-btn" onClick={handleCloseFullScreen}>Back</button>
        </div>
      )}
    </div>
  );
};

export default Courses;
