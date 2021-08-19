// 1) Variable React en scope

import React from "react"


// 2) Variable ReactDOM en scope

import ReactDOM from "react-dom"


// Investigar React Bootstrap

// 3) Componente de React (importado)

import App from "./App"
import "./style.css" 
// 4) Función render

ReactDOM.render(<App/>, document.querySelector("#root"))

