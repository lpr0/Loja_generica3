import './App.css';
import Banner from './componentes/Banner/Banner';
import Secoes from './componentes/Secoes/Secoes';
import Sobreposicao from './componentes/Sobreposicao/Sobreposicao';
import Formulario from './componentes/Formulario/Formulario';
import Rodape from './componentes/Rodape/Rodape';

import React, { useState } from "react";


const secoes = [{
  id: 0,
  nome: "Destaques"
}, {
  id: 1,
  nome: "Computadores"
}, {
  id: 2,
  nome: "Acessórios"
}, {
  id: 3,
  nome: "Impressoras"
}, {
  id: 4,
  nome: "Games"
}, {
  id: 5,
  nome: "Gadgets"
}];

const marcas = [{
  id: 0,
  nome: "HP",
  imagem: "https://files.tecnoblog.net/wp-content/uploads/2021/09/logotipo-da-empresa-hp.png"
}, {
  id: 1,
  nome: "DELL",
  imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png"
}, {
  id: 2,
  nome: "Positivo",
  imagem: "https://seeklogo.com/images/P/positivo-logo-7DC557FEBC-seeklogo.com.png"
}, {
  id: 3,
  nome: "ASUS",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFHMbMKA-S1ymegFG3bTouxSL6kD4rY3a1A&s"
}, {
  id: 4,
  nome: "samsung",
  imagem: "https://brandlogos.net/wp-content/uploads/2014/08/samsung-logo-preview.png"
}, {
  id: 5,
  nome: "apple",
  imagem: "https://yt3.googleusercontent.com/_CvUFHWdEuOCLcBWy8FLoflAibIIBpBBTQPlEBLhP5-YQT8LbvEIIeqz6k3ZCTNvb1aP3UsR6ME=s900-c-k-c0x00ffffff-no-rj"
}, {
  id: 6,
  nome: "lenovo",
  imagem: "https://pbs.twimg.com/profile_images/1714734672142389248/mLYaXmgT_400x400.jpg"
}];

const tel = ["xxxxx-xxxx"];
const mail = "teste@emil.com";


function App() {  

  const [produtos, altProdutos] = useState([]);

  const AdicionarProduto = (Prod) => {
    let prods2 = produtos.slice();
    prods2.push(Prod);
    altProdutos(prods2);
    NidMM(Nid + 1);
  }

  let [formAtivo, AltFormAtivo] = useState(false);
  let [Nid, NidMM] = useState(0);
  
  let [ini, iniMM] = useState([0, 0, 0, 0, 0, 0]);
  
  return (
    <div className="App">
      <Sobreposicao desat={AltFormAtivo} cond={formAtivo}>
        <Formulario cadastrar={AdicionarProduto} Nid={Nid} desat={AltFormAtivo} secoes={secoes} marca={marcas}></Formulario>
      </Sobreposicao>
      <Banner form={AltFormAtivo}></Banner>
      {secoes.map((I) => <Secoes ini={ini} iniMM={iniMM} key={I.id} id={I.id} dados={I} prod={produtos.filter((II) => (II.secao === I.id))} marc={marcas}></Secoes>)}
      <Rodape tel={tel} mail={mail}></Rodape>
    </div>
  );
}

export default App;
