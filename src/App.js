import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom"
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/chats" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
