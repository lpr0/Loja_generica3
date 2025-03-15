import "./Formulario.css"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import CampoTexto from "../CampoTexto/CampoTextro";
import Selecao from "../Selecao/Selecao";

import React, { useState } from "react";


function Formulario (P) {

    const [nome, Snome] = useState('');
    const [preco, Spreco] = useState('');
    const [novo, Snovo] = useState(false);
    const [marca, Smarca] = useState(0);
    const [secao, Ssecao] = useState(0);

    const Salvar =  (e) => {
        e.preventDefault();
        P.desat(false);
        P.cadastrar({
            id: P.Nid,
            nome: nome,
            preco: preco,
            novo: novo,
            marca: marca,
            secao: secao
        })
    }

    const RadioOptions = [{
        nome: "Novo",
        value: true
    }, {
        nome: "Usado",
        value: false
    }];

    return (
        <form onSubmit={Salvar}>
            <ListaSuspensa salvar={Ssecao} label="Seção" opcoes={P.secoes}></ListaSuspensa>
            <ListaSuspensa salvar={Smarca} label="Marca" opcoes={P.marca}></ListaSuspensa>
            <CampoTexto type="text" salvar={Snome} nome="Nome" placeholder=""></CampoTexto>
            <CampoTexto type="number" salvar={Spreco} nome="Preço" placeholder="R$ 00.00"></CampoTexto>
            <Selecao opti={RadioOptions} salvar={Snovo}></Selecao>
            <button>Salvar</button>
        </form>
    )
}

export default Formulario;