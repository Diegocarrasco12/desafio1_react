import React from "react"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'

const App = () => {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App;
