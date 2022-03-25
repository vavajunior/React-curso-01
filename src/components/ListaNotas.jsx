import React, { Component } from "react";
import CardNota from "./CardNota/CardNota";

class ListaNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudos").map((item, index) => {
                    return (
                        <li key={index}>
                            <div>{item}</div>
                            <CardNota />
                        </li>);
                })}
            </ul>);
    }
}

export default ListaNotas;