import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaNotas extends Component {

  constructor() {
    super();
    this.state = { notas: [] };
    this._metodoRenderNotas = this._renderNotas.bind(this);
  }

  componentDidMount() {
    this.props.notas.inscrever(this._metodoRenderNotas);
  }

  componentWillUnmount() {
    this.props.desinscrever(this._metodoRenderNotas);
  }

  _renderNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((item, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota titulo={item.titulo}
                descricao={item.descricao} categoria={item.categoria}
                excluirNota={this.props.excluirNota} idItem={index} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaNotas;