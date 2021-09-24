import {useState, useEffect} from 'react';
import ItemList from "./ItemList";
import {firestore} from '../firebase.js'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    let [items, setItems] = useState([]) 
    const {id} = useParams()

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
                setItems(products)
               
            })
            
        },[id])
    return ( 
        <>
        <div>
        <h1 className="sectionTitle">Productos</h1>
        <ItemList items={items}/>
        </div>
        </>
     );
}
 
export default ItemListContainer;

