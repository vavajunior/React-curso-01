import React, { Component } from 'react';
import './estilo.css'

class CardNota extends Component {
    render() {
        return (
            <div className='card-nota'>
                <header>
                    <h3>Título</h3>
                </header>
                <p>Escreva sua nota...</p>
            </div>
        );
    }
}

export default CardNota;