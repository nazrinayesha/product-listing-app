import React,{useState} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Header from './Header'
import Home from './Home';
import Products from './Products';
import About from './About';
import ProductSpec from './ProductSpec';

function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <BrowserRouter>
      <Header 
      isLoggedIn = {isLoggedIn}
      setIsLoggedIn = {setIsLoggedIn}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={isLoggedIn == true ? <Products /> : <Navigate to="/" />} />
        <Route path="/about" element={isLoggedIn == true ? <About /> : <Navigate to="/" />} />
        <Route path="/product/:prodId" element= {<ProductSpec />} />
        <Route path='*' element = {<h2> 404 page not found </h2>} />
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App