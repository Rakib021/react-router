import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import PostDetail from './components/PostDetail/PostDetail';
import Comments from './components/Comments/Comments';
import CommentsDetail from './components/CommentsDetail/CommentsDetail';



function App() {
  return (
    <div className="App">
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/home" element={<Home></Home>}></Route>
        <Route exact path="/comments" element={<Comments></Comments>}></Route>
        <Route path="/comment/:commentId" element ={<CommentsDetail></CommentsDetail>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="/friend/:friendId" element={<FriendDetail></FriendDetail>}></Route>
        <Route path ="/post/:postId" element = {<PostDetail></PostDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
