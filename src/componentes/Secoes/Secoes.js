import "./Secoes.css";
import Card from "../CardProdutos/Card";
import Carrocel from "../Carrocel/Carrocel";


function Secoes (P) {
    
    let ini = P.ini[P.id];
    const col = 5;
    const ele = Nele(ini);  


    if (P.prod.length <= 0) {
        return "";
    }

    function Nele (I) {
        let ele2 = [];
        let cont = 0;
        while (cont < col && cont < P.prod.length) {
            ele2.push(P.prod[I % P.prod.length]);
            cont++;
            I++;
        }
        return ele2;
    }

    function altIni (I) {
        ini = (P.prod.length + (ini + I)) % P.prod.length;
        let ini2 = P.ini.slice();
        ini2[P.id] = ini;
        P.iniMM(ini2);
    }

    return (
        <section className="secoes">
            <h3>{P.dados.nome}</h3>
            <Carrocel alt={altIni}>
                {ele.map((I) => <Card key={I.id} dados={I} marc={P.marc}></Card>)}
            </Carrocel>
        </section>
    )
}

export default Secoes;