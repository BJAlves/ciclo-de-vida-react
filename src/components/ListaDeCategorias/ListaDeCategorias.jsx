import React, {Component} from 'react';

class ListaDeCategorias extends Component {
    _handleEventInput(e) {
        if(e.key === "Enter") {
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }
    render () {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.map((categoria, index) => {
                        return <li key={index} className="lista-categorias_item">{categoria}</li>
                    })}
                </ul>
                <input placeholder="Adicionar categoria"
                 type="text"
                 className="lista-categorias_input"
                 onKeyUp={this._handleEventInput.bind(this)} />
            </section>

        );
    }
}

export default ListaDeCategorias;