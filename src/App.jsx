import React from "react"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './components/Register'
import Home from './components/Home'
import './App.css'
import Login from "./components/Login"
import Cart from "./components/Cart"
import { pizzaCart } from "./pizzas"
import { useState } from "react"


const App = () => {
    const [cart, setCart] = useState(pizzaCart)

    const totalQuantity = cart.reduce((acc, pizza) => acc + pizza.quantity, 0)
    const totalPrice = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0)

  return (
    <div className="app-container">
      <Navbar totalQuantity={totalQuantity} totalPrice={totalPrice}/>
      <main className="main-content">
      <Home />
      </main>   
      <Cart cart={cart} setCart={setCart}/>  
      <Footer />
    </div>
  )
}

export default App;