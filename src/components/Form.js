import {useState} from 'react';
import { CartContext } from "./CartContext"
import { useContext} from "react"
import {firestore} from '../firebase.js'
import {Link} from 'react-router-dom';

const Form = () =>{
    const {cart} = useContext(CartContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [orderId, setOrderId] = useState(null);

    const onName = (event) => {
        setName(event.target.value);
    }
    const onEmail = (event) => {
        setEmail(event.target.value);
    }
    const onPhone = (event) => {
        setPhone(event.target.value);
    }
    const user = {name, email, phone}

    const items = cart.map((p) => ({
        id: p.id,
        name: p.nombre,
        quantity: p.quantity,
        subtotal: p.precio * p.quantity,
      }))
    const totalPrice = cart.reduce(
        (total, product) => total + product.quantity * product.precio,
        0
      )
    
    const createOrder = (e) =>{
        e.preventDefault()
        const db = firestore
        const orders = db.collection("orders")
        const newOrder = {
            user,
            items,
            total: totalPrice,
          };
        orders.add(newOrder).then(({id})=>{
            setOrderId(id)
        })
    }

    if (orderId) {
        return (
            <>
            <div className="orderEnd">
            <h3>¡Gracias por su compra!</h3>
            <p>El id de su pedido es {orderId}</p>
            <Link to="/"><button className="btn">Volver a la página principal</button></Link>
            </div>
            </>
        )
    }
    return (
        <>
        <form className="orderForm">
            <label for="name">Nombre:</label>
            <input type="text" id="name" onChange={onName}></input>
            <br/>
            <label for="email">Email:</label>
            <input type="text" id="email" onChange={onEmail}></input>
            <br/>
            <label for="phone">Teléfono:</label>
            <input type="text" id="phone" onChange={onPhone}></input>
            <br/>
            <button className="btn" type="submit" onClick={createOrder} >Enviar pedido</button>
        </form>
        </>
    )
}

export default Form