import "./CampoTexto.css";

// salvar nome placeholder
function CampoTexto (P) {
    const alterar = (e) => {
        P.salvar(e.target.value);
    }

    return (
        <div className="CampoTexto">
            <label >{P.nome}
                <input type={P.type} placeholder={P.placeholder} required onChange={alterar}/>
            </label>
        </div>
    )
}

export default CampoTexto;