import "./colaborador.css"
                                       // esta é uma outra forma de passar props de forma desestruturada. Dessa forma só os props que foram passados como parâmetros será lido
 export const Colaborador = ({nome, cargo, imagem, corDeFundo})=>{
    return (
      <div className="colaborador">
        <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
          <img src={imagem} alt={nome} />
        </div>
        <div className="rodape">
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
      </div>
    );

}