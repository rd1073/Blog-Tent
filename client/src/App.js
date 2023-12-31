 
import './App.css';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import CreatePost from './pages/CreatePost';
import Footer from './components/Footer';
import { AuthProvider } from '../src/context/authContext';


function App() {
  return (
    <AuthProvider>
    <div className="App">
     
     <Router>
      <div>
        
      <Navbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />


          




        </Routes>
      </div>
    </Router>

    
    </div>
    </AuthProvider>
  );
}

export default App;
