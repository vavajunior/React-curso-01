import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.descricao = "";
    this.categoria = "Sem Categoria";
    this.state = { categorias: [] };
    this._metodoRenderCategorias = this._renderCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._metodoRenderCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._metodoRenderCategorias)
  }

  _renderCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleInput_Titulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleInput_Descricao(event) {
    event.stopPropagation();
    this.descricao = event.target.value;
  }

  _handleSelect_Categoria(event) {
    event.stopPropagation();
    this.categoria = event.target.value;
  }

  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.descricao, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}>
        <select className="form-cadastro_input"
          onChange={this._handleSelect_Categoria.bind(this)}>
          <option>Sem Categoria</option>
          {this.state.categorias.map((item, i) => <option key={i}>{item}</option>)}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleInput_Titulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleInput_Descricao.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;