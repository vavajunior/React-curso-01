import React, { Component } from "react";
import ListaNotas from "./components/ListaNotas";
import ListaCategorias from "./components/ListaCategorias";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import Notas from "./models/Notas";
import Categorias from "./models/Categorias";

class App extends Component {

  constructor() {
    super();
    this.notas = new Notas();
    this.categorias = new Categorias();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias}
          criarNota={this.notas.adicionar.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaCategorias categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionar.bind(this.categorias)} />
          <ListaNotas notas={this.notas}
            excluirNota={this.notas.excluir.bind(this.notas)} />
        </main>
      </section>
    );
  }
}

export default App;