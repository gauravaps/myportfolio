import { Link } from "react-router-dom";
import Sdata from "../../Sdata";
import React, { useEffect, useState } from 'react';
import { HashLoader } from "react-spinners";

import './style.css';


 

const Courses = () => {
  const [fullScreen, setFullScreen] = useState({ isActive: false, imgSrc: "" });
  const [loading ,setloading] =useState(Sdata.length ===0)
  const token = localStorage.getItem("token");

  


  const handleFullScreen = (imgSrc) => {
    setFullScreen({ isActive: true, imgSrc });
  };



  const handleCloseFullScreen = () => {
    setFullScreen({ isActive: false, imgSrc: "" });
  };



  return (
    <div className="main-div">

{loading ? (
      <div className="sekelton_loader">
        <HashLoader color="#1876f2" size={30} />
      </div>
    ) : ( 

    <>   

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

      </>)}

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
