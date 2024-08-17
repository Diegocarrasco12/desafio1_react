import React from "react";
import Header from "./Header";
import CardPizza from './CardPizza';
import pizzas from '../pizzas'

const Home = () => {


    return (
        <div className="container-fluid p-0">
            <Header />

            <div className="row">
                {pizzas.map((pizza) => {
                    return (
                        <div key={pizza.id} className="col-md-4 col-sm-6 mb-4">
                            <CardPizza key={pizza.id} pizza={pizza} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;