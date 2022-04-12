export default class Notas {
    constructor() {
        this.itens = [];
        this._inscritos = [];
    }

    inscrever(eventoView) {
        this._inscritos.push(eventoView);
    }

    desinscrever(eventoView) {
        this._inscritos = this._inscritos.filter(f => f !== eventoView);
    }

    notificar() {
        this._inscritos.forEach(eventoView => {
            eventoView(this.itens);
        });
    }

    adicionar(titulo, descricao, categoria) {
        const novoItem = new Nota(titulo, descricao, categoria);
        this.itens.push(novoItem);
        this.notificar();
    }

    excluir(indice) {
        this.itens.splice(indice, 1);
        this.notificar();
    }
}

class Nota {
    constructor(titulo, descricao, categoria) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.categoria = categoria;
    }
}