export default class Categorias {
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

    adicionar(nomeCategoria) {        
        this.itens.push(nomeCategoria);
        this.notificar();
    }
}