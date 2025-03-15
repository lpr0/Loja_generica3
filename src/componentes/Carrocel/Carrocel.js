import "./Carrocel.css";

function Carrocel (P) {

    function Mdireita () {
        P.alt(1);
    }

    function Mesquerda () {
        P.alt(-1);
    }

    return (
        <div className="carrocel">
            <button onClick={Mesquerda}>&lt;-</button>
            {P.children.map((I)=> <article key={I.key}>{I}</article>)}
            <button onClick={Mdireita}>-&gt;</button>
        </div>
    )
}

export default Carrocel;