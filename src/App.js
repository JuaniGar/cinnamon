import ItemListContainer from "./components/ItemListContainer.js"
import NavBar from "./components/NavBar.js"
import ItemDetailContainer from './components/ItemDetailContainer.js';
import Cart from './components/Cart.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomProvider from "./components/CartContext.js";

const App = () => {

    return (
        <BrowserRouter>
            <CustomProvider>
                <NavBar/>
                <Switch>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/" component={ItemListContainer} exact />
                    <Route path="/category/:id" component={ItemListContainer}/>
                    <Route path="/item/:id" component={ItemDetailContainer}/>
                </Switch>
            </CustomProvider>
        </BrowserRouter>
    )
}
export default App 