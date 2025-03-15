import "./Selecao.css"


function Selecao (P) {

    const conv = (e) => {
        P.salvar("true" === e.target.value);
    }

    return (
        <div className="Selecao">
            {P.opti.map((I) => <label key={I.nome} >{I.nome}<input type="radio" value={I.value} name="NovoUsado" onChange={conv} required /></label>)}
        </div>
    )
}

export default Selecao;