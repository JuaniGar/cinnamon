import React from 'react';
import {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import Form from './Form';

import { useParams } from 'react-router-dom';
import {firestore} from '../firebase.js'



const ItemDetailContainer = () =>{
    const [detail, setDetail] = useState([])
    const {id} = useParams();
    useEffect(() => {
        const db = firestore
        const collection = firestore.collection("products")
        
        
        const query = collection.get()
    
        query
        .then((snapshot)=>{
            
                const docs = snapshot.docs
    
                const products = []
    
                docs.forEach((doc)=>{
                    const docSnapshot = doc
                
                    const productsId = {...docSnapshot.data(),id:docSnapshot.id}
                    products.push(productsId)
                }) 
                setDetail(products)
               
            })
            
        },[id])
   console.log(detail);
    return (
    <>
    <Form/>
    {detail.map((itemDesc)=>(
        <ItemDetail detail={itemDesc}/>
    ))}
    </>
)
}

export default ItemDetailContainer
