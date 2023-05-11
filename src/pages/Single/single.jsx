import React from 'react';
import './single.css';
import Sidebar from '../../components/sideBar/Sidebar';
import SinglePost from '../../components/singlePost/singlePost';

export default function single() {
  return (
  <div className="single">
      <SinglePost/>
      {/* post */}
      <Sidebar/>
  </div>
  );
}
