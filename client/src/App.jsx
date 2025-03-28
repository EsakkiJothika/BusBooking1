import { useEffect, useState } from 'react'
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
import Singlebuspage from './pages/Singlebuspage'
import Footer from './components/footer/Footer'


function App() {


  let { message, checkAuth } = Authstore(); // Make sure checkAuth is available
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      if (checkAuth) {
          checkAuth()
              .then(() => setLoading(false))
              .catch(() => setLoading(false));
      } else {
          console.error("checkAuth function is missing!");
          setLoading(false);
      }
  }, []);

  if (loading) {
      return <div className='container1 ' >
        <div className=' loader'></div>
        </div>
  }

    


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
      <Route path='/addbus' element={<Contactpage />}>Addbus</Route>
      <Route path='/signup' element={<Signuppage />}>Signup</Route>
      <Route path='/login' element={message.status ? <Bookticketpage /> : <Loginpage />}>Login</Route>
      <Route path='/bookticket' element={message.status ? <Bookticketpage /> : <Loginpage />}>BookTicket</Route>
      <Route path='/singlebus/:id' element={<Singlebuspage />}>SingleBus</Route>

    </Routes>

    <Footer />
    
    </BrowserRouter>
      
    </>
  )
}

export default App
