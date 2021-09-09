import ItemListContainer from "./components/ItemListContainer.js"
import NavBar from "./components/NavBar.js"
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path="/" component={ItemListContainer} exact />
                <Route path="/category/:id" component={ItemListContainer}/>
                <Route path="/item/:id" component={ItemDetailContainer}/>
            </Switch>
        </BrowserRouter>
    )
}
export default App 