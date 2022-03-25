import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaNotas from "./components/ListaNotas";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Olá Mundo React</h1>
        <FormularioCadastro />
        <ListaNotas />
      </div>
    );
  }
}

export default App;