import { useEffect, useState } from 'react';
import './home.css';
import Header from '../../components/header/header';
import Posts from '../../components/posts/posts';
import SideBar from '../../components/sideBar/Sidebar';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  const handleTitle = async (e) => {
    console.log(title);
    try {
      if (title) {
        const res = await axios.get(`/posts/getByTitle/${title}`);
        setSearchResult(res.data);
        console.log('search post', searchResult);
      }
    } catch (err) {
      console.log('search err');
    }
  };

  return (
    <>
      <Header />
      <input
        type="text"
        className="searchInput"
        placeholder="Search Blogs"
        onChange={(e) => setTitle(e.target.value)}
      />
      <i className="topSearchIcon fas fa-search" onClick={handleTitle}></i>
      <div className="home">
        {searchResult ? (
          <Posts posts={searchResult} />
         ) : ( 
            <Posts posts={posts} /> 
        )} 
         <SideBar />
      </div>
    </>
  );
}
