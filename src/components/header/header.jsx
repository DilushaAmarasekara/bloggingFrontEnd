import React from 'react';
import './header.css';
//import HeaderImage from '../../assests/header-background.png';
import HomeImage from '../../assests/home.jpg';
 
export default function header() {
  return(
  <div className="header">
      <div className="headerTitles">
          <span className="headerTitleSm">Web Technologies</span>
          <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg"
       src={HomeImage} 
       alt="" />
  </div>
  );
}
