import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import PostAJoke from './components/PostAJoke';


import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element = {<HomePage/>} />
          <Route path="/getJokes" element = {<PostAJoke/>} />
          
        </Routes>        
      </BrowserRouter>
    </div>
  );
}

export default App;
