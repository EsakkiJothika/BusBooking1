import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Signuppage from './pages/Signuppage'
import Loginpage from './pages/Loginpage'
import Navbar from './components/Navbar'
import "./App.css"
import Navmobile from './components/Navmobile'
import Bookticketpage from './pages/Bookticketpage'
import { Authstore } from './statemanager/auth.store'
import Contactpage from './pages/Contactpage'


function App() {


  let {message} = Authstore();


  return (
    <>

    <BrowserRouter>

<div id='Dnav'>
<Navbar />
</div>

<div id='Navm'>
  <Navmobile />
</div>
    

    <Routes >

      <Route path='/' element={<Homepage />}>Home</Route>
      <Route path='/contact' element={<Contactpage />}>Contact</Route>
      <Route path='/signup' element={<Signuppage />}>Signup</Route>
      <Route path='/login' element={message.status ? <Bookticketpage /> : <Loginpage />}>Login</Route>
      <Route path='/bookticket' element={message.status ? <Bookticketpage /> : <Loginpage />}>BookTicket</Route>

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
