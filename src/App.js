import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom"
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
function App() {
  return (
    <div className="app">
      <Routes>
        <Route exat path="/" element={<Home />} />
        <Route exat path="/auth/login" element={<Login />} />
        <Route exat path="/auth/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
