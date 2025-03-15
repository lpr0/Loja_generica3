import "./Sobreposicao.css"


function Sobreposicao (P) {
    if (!P.cond) {
        return null;
    }

    const fechar = (e) => {
        if (e.target.className === "sobreposicao") {
            P.desat(false);
        }
    }
    
    return (
        <div className="sobreposicao" onClick={fechar}>
            {P.children}
        </div>
    )
}

export default Sobreposicao;