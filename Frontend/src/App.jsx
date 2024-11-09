import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses'
import { Navigate, Route, Routes } from "react-router-dom"
import First from './courses/First'
import Second from './courses/Second'
import Fifth from './courses/Fifth'
import Third from './courses/Third'
import Fourth from './courses/fourth'
import Quecard from './components/Quecard'
import Quepage from './quepaper/Quepage'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider'


function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser);
  return (
   <>
     
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser? <Courses/>:<Navigate to='/signup' />}/>
      <Route path='/course/first' element={<First/>}/>
      <Route path='/course/second' element={<Second/>}/>
      <Route path='/course/third' element={<Third/>}/>
      <Route path='/course/fourth' element={<Fourth/>}/>
      <Route path='/course/fifth' element={<Fifth/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/quepage' element={<Quecard/>}/>
     </Routes>

     <Toaster />
   </>
  )

}

export default App
