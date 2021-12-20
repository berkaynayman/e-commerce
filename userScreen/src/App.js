import './App.css';
  
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Signin from './pages/Auth/Signin'
import Signup from './pages/Auth/Signup'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div id='content'>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/signup" element={<Signup/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
