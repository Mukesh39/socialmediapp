import './App.css';
import  Home from './pages/home/Home'
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
