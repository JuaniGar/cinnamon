import {firestore} from '../firebase.js';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';



const Form = () =>{
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const {id} = useParams()

    useEffect(()=>{
        const products = firestore.collection("products")
    },[id])

    const sentOrder = () => {
        const orders = firestore.collection("orders")
    
        const user = {
            name,
            email
        }
        const order ={
            products,
            user
        }
        const query= orders.add(order)
        query.then(()=>console.log("Se guardó la orden"))
    }


const saveName = (e) =>{
    setName(e.target.value)
}
const saveEmail = (e) =>{
    setEmail(e.target.value)
}
    return (
        <>
        <input type="text" onChange={saveName} placeholder="Nombre"></input>
        <input type="text" onChange={saveEmail} placeholder="Email"></input>
        <button onClick={sentOrder}>Confirmar orden</button>
        </>
    )
}

export default Form