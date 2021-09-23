import {useState, useEffect} from 'react';
import React from 'react';
import Item from "./Item";
import product1 from '../media/product1.jpg';
import product2 from '../media/product2.jpg';
import product3 from '../media/product3.jpg';

let promiseData = () =>{
    return new Promise((res, rej)=>
       setTimeout(()=>{
           res([
               {id:1, nombre: "Producto 1", descripcion:"Este es el producto 1", precio:"300", stock:"10", img:product1},
               {id:2, nombre: "Producto 2", descripcion:"Este es el producto 2", precio:"200", stock:"30", img:product2},
               {id:3, nombre: "Producto 3", descripcion:"Este es el producto 3", precio:"600", stock:"5", img:product3}
           ])
       },2000)
       );
    }
    
const ItemList = () => {

    let [items, setItems] = useState([]) 

    useEffect(()=>{
         promiseData().then((data)=>{
             setItems(data)
         },[])
     });

    return (
        <div className="cardsContainer">
            {items.map((item) => (
                <Item key={item.id} data={item} />
            ))}
        </div>
    )
};

export default ItemList
