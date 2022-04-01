import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

class CardNota extends Component {

  excluir() {
    const idItem = this.props.idItem;
    this.props.excluirNota(idItem);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.excluir.bind(this)} />
          <h5>{this.props.categoria}</h5>
        </header>
        <p className="card-nota_texto">{this.props.descricao}</p>
      </section>
    );
  }
}

export default CardNota;