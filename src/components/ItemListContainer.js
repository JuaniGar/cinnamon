import {useState} from 'react';
import product1 from '../media/product1.jpg';
import product2 from '../media/product2.jpg';
import product3 from '../media/product3.jpg';
const ItemListContainer = (props) => {
    const stock = 5
    const [count, setCount] = useState(0)

    const sumar = () =>  {
        if (stock > count){
            setCount(count + 1)}
            else{
                setCount(count + 0)
            }   
    }
    const restar = () =>{
        if (count>1){
            setCount(count - 1)}
            else{
                setCount(count - 0)
            }   
        }
    
    return ( 
        <>
        <h1 className="sectionTitle">{props.section}</h1>
        <div className="cardsContainer">
          <div className="card" >
              <h3>Producto 1</h3>
              <img className="cardImg"src={product1} alt="Producto 1"/>
              <div className="cardForm">
                  <button className="cardFormBtn" onClick={restar}>-</button>
                  <p className="cardFormText">Cantidad: {count} </p>
                  <button className="cardFormBtn" onClick={sumar}>+</button><br></br>
                  <button >Sumar al carrito</button>
              </div>
          </div>
          <div className="card">
              <h3>Producto 2</h3>
              <img className="cardImg" src={product2} alt="Producto 2"/>
              </div>
          <div className="card">
              <h3>Producto 3</h3>
              <img className="cardImg" src={product3} alt="Producto 3"/>
          </div>
        </div>
        </>
     );
}
 
export default ItemListContainer;