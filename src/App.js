import React, { Component } from "react";
import ListaNotas from "./components/ListaNotas";
import ListaCategorias from "./components/ListaCategorias";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: ["Trabalho", "Leituras"]
    };
  }

  criarNota(titulo, descricao, categoria) {
    const item = { titulo, descricao, categoria };
    const novaLista = [...this.state.notas, item];
    const novoState = {
      notas: novaLista
    };
    this.setState(novoState);
  }

  adicionarCategoria(nomeCategoria) {
    //utilização de Spread Operator
    const novaLista = [...this.state.categorias, nomeCategoria];
    const novoState = { ...this.state, categorias: novaLista };
    this.setState(novoState);
  }

  excluirNota(index) {
    let listaNotas = this.state.notas;
    listaNotas.splice(index, 1);
    this.setState({
      notas: listaNotas
    });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}
          categorias={this.state.categorias} />
        <main className="conteudo-principal">
          <ListaCategorias categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)} />
          <ListaNotas notas={this.state.notas}
            excluirNota={this.excluirNota.bind(this)} />
        </main>
      </section>
    );
  }
}

export default App;