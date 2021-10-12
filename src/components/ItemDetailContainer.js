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
       
        collection.get().then((snapshot) => {
            const item = snapshot.docs.find(doc =>doc.id === id)
            const data = [] 
            const dataArray = {...item.data(),id:item.id}
            data.push(dataArray)
            setDetail(data)
            setLoading(false)
    })
        },[id])
 
    return (
    <>
    
    {loading ? <h1>Cargando producto...</h1> : detail.map((itemDesc)=>(
        <ItemDetail detail={itemDesc}/>
    ))}
    
    </>
    )
}

export default ItemDetailContainer
