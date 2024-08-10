import React from "react"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './components/Register'
import Home from './components/Home'
import './App.css'
import Login from "./components/Login"




const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
      <Login/> 
      </main>     
      <Footer />
    </div>
  )
}

export default App;