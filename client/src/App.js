import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import GetAllPosts from './Components/GetAllPosts';
import Form from './Components/Form';
import Home from './pages/Home';
import HighScore from './pages/HighScore';
import Loot from './pages/Loot';

function App() {
  return (
    <div className="App">  
      <Router>
        <ul>
          <li><a><Link to="/">Home</Link></a></li>
          <li><a><Link to="/loot">Loot</Link></a></li>
          <li><a><Link to="/highscore">High Score</Link></a></li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/loot" element={<Loot />} />
          <Route path="/highscore" element={<HighScore />} />
        </Routes>
      </Router>
    </div>)

}

export default App;
