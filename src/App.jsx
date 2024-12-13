import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';



const App = () => { 

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/about' element={ <About/>} />
        <Route path='/contact' element={ <Contact/>} />
        <Route path='/login' element={ <Login/> } />
        <Route path="/Register" element={<Register />} />

        
        

      
        
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
