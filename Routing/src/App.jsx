
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Categories from './components/Categories' 
import About from './components/About'
import Layout from './components/Layout'
import Category from './components/Category'
import CategoryLayout from './components/CategoryLayout'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {


  

  return (
    <Layout>
    <Routes>
      <Route index element={<Home />} />  
      <Route path='categories' element={<CategoryLayout />} >
      <Route index element={<Categories />} />
      <Route path=':slug' element={<Category/>} />
      </Route>
      
      <Route path='about' element={<About />} />
    </Routes>
    </Layout>
   
  )
}

export default App
