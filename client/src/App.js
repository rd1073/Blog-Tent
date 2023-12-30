 
import './App.css';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';


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

          




        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
