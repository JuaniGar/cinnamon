import React from 'react';
import {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {firestore} from '../firebase.js'



const ItemDetailContainer = () =>{
    const [detail, setDetail] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams();
    useEffect(() => {
        const db = firestore
        const collection = db.collection("products")
        
        
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
                setLoading(false)
            })
            
        },[id])
   console.log(detail);
    return (
    <>
    
    {loading ? <h1>Cargando productos...</h1> : detail.map((itemDesc)=>(
        <ItemDetail detail={itemDesc}/>
    ))}
    
    </>
)
}

export default ItemDetailContainer
