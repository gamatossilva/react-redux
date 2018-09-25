import React, { Component } from 'react'

export default class Saudacao extends Component {

    constructor(props) {
        super(props)

        this.setTipo = this.setTipo.bind(this)

    }

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    setTipo(e) {
        console.log(e.target.value)
        //this.props.tipo = e.target.value
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr />
                <input type="text" placeholder='Tipo...' onChange={this.setTipo} value={tipo} />
                <input type="text" placeholder='Nome...' onChange={e => this.setNome(e)} value={nome} />
            </div>
        )
    }
}