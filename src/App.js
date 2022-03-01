import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { Routes, Route, Link } from "react-router-dom";
// Styles Importing
import './styles/css/style.css';
import './styles/css/jquery.Jcrop.min.css';
// import './styles/css/owl.theme.default.css';
// import './styles/css/jquery.baSlider.css';
// import './styles/css/bootstrap.css';
import './styles/css/dropzone.min.css';
import './styles/css/front-custom.css';
// Components
import Header from './components/Shared/Header';
import Home from './components/Pages/Home';
import Ecommerce from './components/Pages/Ecommerce';
import Footer from './components/Shared/Footer';
import WithHeaderFooter from './components/Layouts/WithHeaderFooter';
import NoHeaderFooter from './components/Layouts/NoHeaderFooter';
import Login from './components/Pages/Login';
import Upload from './components/Pages/Upload'
import Terms from './components/Pages/Terms'
import CancellationPolicy from './components/Pages/CancellationPolicy'
import PrivacyPolicy from './components/Pages/PrivacyPolicy'
import AboutUs from './components/Pages/AboutUs'
import ContactUs from './components/Pages/ContactUs'
import Pricing from './components/Pages/Pricing'
import Signup from './components/Pages/Signup';
function App() {
    return (


        <div className="App">
      
        <Routes>
          <Route element={<WithHeaderFooter/>}>
            <Route path='/' element={<Home/>}/>
            <Route path="/ecommerce" element={<Ecommerce/>}/>
            <Route path='/upload' element={<Upload/>} />
            <Route path='/terms' element={<Terms/>} />
            <Route path='/cancellation-policy' element={<CancellationPolicy/>} />
            <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
            <Route path='/aboutus' element={<AboutUs/>} />
            <Route path='/contact' element={<ContactUs/>} />
            <Route path='/pricing' element={<Pricing/>} />
          </Route>
          
          <Route element={<NoHeaderFooter/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>} />
  
          </Route>

          {/*
              /upload
              /login
              /pricing
              /terms
              /privacy-policy
              /cancellation-policy
          */}

        </Routes>

    </div>
    );
}

export default App
