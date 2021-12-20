import './App.css';
  
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from './pages/Products';
import Signin from './pages/Auth/Signin'
import Signup from './pages/Auth/Signup'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div id='content'>
        <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/signup" element={<Signup/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
