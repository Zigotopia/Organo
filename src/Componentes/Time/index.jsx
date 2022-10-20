import { Colaborador } from '../Colaborador'
import './time.css'



 export const Time = (props)=>{
    return( //essa é a forma de fazer condiconal no react. Se uma condição for verdadeira tal coisa acontece. Tbm poderia ser usado aqui o operador ternario    
        props.colaboradores.length > 0 &&
        <section className='time' style={{backgroundColor: props.corSecundaria}} >
            <h3 style={{color:props.corPrimaria}} >{props.nome}</h3> 
            <div className='flexContainer'> 
        {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.Nome} cargo={colaborador.Cargo} corDeFundo={props.corPrimaria} imagem={colaborador.Imagem}/>) }  
           </div>
        </section>
    )
}




// aqui usamos o map de colaboradores para que  a cada colaborador cadastrado criemos um componente Colaborador com o valores passados a colaboradores