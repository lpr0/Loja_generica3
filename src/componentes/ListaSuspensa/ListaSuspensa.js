import "./ListaSuspensa.css";

// salvar, label, opcoes
function ListaSuspensa (P) {

    const alterar = (e) => {
        P.salvar(parseInt(e.target.value));
    }

    return (
    <div className="ListaSuspensa">
        <label>{P.label}
            <select required onChange={alterar}>
                {P.opcoes.map(I => <option key={I.id} value={I.id}>{I.nome}</option>)}
            </select>
        </label>
    </div>
    )
}


export default ListaSuspensa;