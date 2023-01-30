import './Animes.css';

const Animes = (props) => {
    return (
        <div className="anime">
            <div className="cabecalho">
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className="rodape">
                <div className='infos'>
                    <span>{props.nome}</span>
                    <p>{props.estrela}</p>
                </div>
                <div className="play">
                    <img src="/images/play.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Animes;