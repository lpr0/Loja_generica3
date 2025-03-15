import "./Card.css";


function Card (P) {

    const img = (P.marc.filter((I) => I.id === P.dados.marca));

    return (
        <article className="card">
            <header>
                <img src={img[0].imagem} alt="logo fabricante" />
            </header>
            <main>
                <h4>{P.dados.nome}</h4>
                <h5>Preço: R$ {P.dados.preco}</h5>
                <h5>{P.dados.novo ? "Novo" : "Usado"}</h5>
            </main>
        </article>
    )
}

export default Card;