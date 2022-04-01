import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((item, index) => {
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