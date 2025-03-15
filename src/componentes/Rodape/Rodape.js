import "./Rodape.css"


function Rodape (P) {
    return (
    <footer>
        <div>
            <h6>Telefones:</h6>
            {P.tel.map((I) => <p key={I} >{I}</p>)}
        </div>
        <div>
            <h6>Email: </h6>
            <p>{P.mail}</p>
        </div>
        
    </footer>
    )
}

export default Rodape;