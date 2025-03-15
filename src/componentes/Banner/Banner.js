import "./Banner.css";


function Banner (P) {

    const altF = () => {
        P.form(true)
    }

    return (
        <header className="banner">
            <div>
                <img src="/image/hexagonoCinza.png" alt="logotipo" />
                <h1>Loja genérica</h1>
            </div>
            <button onClick={altF}>
                Adicionar Produto
            </button>
        </header>
    )
}


export default Banner;