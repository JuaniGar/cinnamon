const ItemListContainer = (props) => {
    return ( 
        <>
        <h1 className="sectionTitle">{props.section}</h1>
        <div className="sectionContainer">
          <div>
              <h3>Card 1</h3>
              <img src="#"/>
          </div>
          <div>
              <h3>Card 2</h3>
              <img src="#"/>
              </div>
          <div>
              <h3>Card 3</h3>
              <img src="#"/>
          </div>
        </div>
        </>
     );
}
 
export default ItemListContainer;