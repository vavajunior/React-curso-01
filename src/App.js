import React, { Component } from "react";
import ListaNotas from "./components/ListaNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, descricao) {
    const item = { titulo, descricao };
    const novaLista = [...this.state.notas, item];
    const novoState = {
      notas: novaLista
    };
    this.setState(novoState);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;