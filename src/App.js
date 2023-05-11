import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import TopBar from "./components/topbar/topbar";
import Register from "./pages/Register/register";
import Login from "./pages/login/login";
import Settings from "./pages/Settings/settings";
import Write from "./pages/Write/write";
import Single from "./pages/Single/single";
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {

  const {user} = useContext(Context);

  return (
      <Router>
          <TopBar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={user ? <Home/> :<Login/>}></Route>
            <Route path="/register" element={user ? <Home/> : <Register/>}></Route>
            <Route path="/settings" element={user ? <Settings/> : <Register/> }></Route>
            <Route path="/write" element={user ? <Write/> : <Register/>}></Route>
            <Route path="/post/:postId" element={<Single/>}></Route>
          </Routes>
      </Router>
  );
}

export default App;
