import React, { useState } from "react";
import { useCart } from "react-use-cart";

const Itemcard = (props) => {
    const {addItem} = useCart();

    return (
        
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} class="card-img-top img-fluid" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <h5 class="card-title">{props.preis} Euro</h5>
                        <p class="card-text">{props.desc}</p>
                        <button class="btn btn-success" 
                            onClick= {() =>addItem({ id: props.item, price: 1})}
                        >zur Karte hinzufügen</button>
                    </div>
                    
            </div>
        </div>
         
        
    );

};


{/*
const [neupreis, setNeupreis]= useState("");
const handleSubmit = (event)=> {
    event.preventDefault();
}
const handlechange =(event)=>{
    console.log(event);
}
const Itemcard = (props) => {
    <form action="submit" onSubmit={handleSubmit}>
        <input type="text" placeholder="title" />
        <input value={neupreis} type="number" placeholder="preDeskriptionis" onChange={handlechange}/>
        <input type="text" placeholder="Deskription..." />
        <button>zur Karte hinzufügen</button>
    </form>
};

*/}
export default Itemcard;