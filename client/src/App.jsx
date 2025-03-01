import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Signuppage from './pages/Signuppage'
import Loginpage from './pages/Loginpage'
import Navbar from './components/Navbar'


function App() {


  return (
    <>

    <BrowserRouter>

    <Navbar />

    <Routes >

      <Route path='/' element={<Homepage />}>Home</Route>
      <Route path='/signup' element={<Signuppage />}>Signup</Route>
      <Route path='/login' element={<Loginpage />}>Login</Route>

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
