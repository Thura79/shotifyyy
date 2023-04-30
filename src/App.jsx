import React from 'react'
import Products from './components/Products';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Addtocart from './components/Addtocart';
import Detail from './components/Detail';

const App = () => {
  return (
    <div className=' container mx-auto'>
      <Nav  />

      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/addtocart' element={<Addtocart/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
    </div>
  )
}

export default App 