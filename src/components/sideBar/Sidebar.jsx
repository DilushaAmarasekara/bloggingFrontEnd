import React, { useEffect, useState } from 'react';
import './sideBar.css';
import sideImage from '../../assests/me.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get('/category');
      setCats(res.data);
      //console.log(res.data);
    };
    getCategories();
  }, []);

  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">WEBSITE OWNER</span>
        <img src={sideImage} alt="" className="sideBarImg" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur qui
          labore explicabo omnis optio quam animi similique, maxime aut illo
          voluptatum odit quas, minus atque beatae iste voluptatem temporibus
          eligendi.
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>

        <ul className="sideBarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sideBarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW ME</span>
        <ul className="sideBarSocial">
          <i className="sideBarIcon fab fa-facebook-square"></i>
          <i className="sideBarIcon fab fa-twitter-square"></i>
          <i className="sideBarIcon fab fa-pinterest-square"></i>
          <i className="sideBarIcon fab fa-instagram-square"></i>
        </ul>
      </div>
    </div>
  );
}
