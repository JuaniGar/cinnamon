import React from 'react';
import {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';




const ItemDetailContainer = () =>{
    const {id} = useParams();
    const [itemDesc, setItemDesc] = useState([])
    useEffect(()=>{
        fetch('https://mocki.io/v1/9c17a66c-59ff-4dbb-8dfc-f664b22b2be3')
        .then(response => response.json())
        .then((detail)=>{
            const select = detail.find(element => element.id === id)
            setItemDesc(select)
        });
    },[]);
    return (
    <>
        <ItemDetail detail={itemDesc}/>
    </>
)
}

export default ItemDetailContainer
