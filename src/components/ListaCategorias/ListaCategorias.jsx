import React, { Component } from "react";
import "./estilo.css";

class ListaCategorias extends Component {
    _handleEventoInput(e) {
        if (e.key === "Enter") {
            const nomeCategoria = e.target.value;
            this.props.adicionarCategoria(nomeCategoria);
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.map((item, index) => {
                        return <li key={index} className="lista-categorias_item">{item}</li>
                    })}
                </ul>
                <input type="text" placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}
                    className="lista-categorias_input"/>
            </section>
        );
    }
}

export default ListaCategorias;