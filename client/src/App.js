 
import './App.css';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import CreatePost from './pages/CreatePost';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
     
     <Router>
      <div>
        
         

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />


          




        </Routes>
      </div>
    </Router>

    <Footer />
    </div>
  );
}

export default App;
