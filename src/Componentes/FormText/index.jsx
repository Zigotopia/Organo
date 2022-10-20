
import { useState } from 'react'
import './formText.css'


                                  // aqui tem sempre um parametro props implicito. É como se fosse FormText(props)
 export default function FormText(props){

    
    const aoMudar = (event) => {
     props.aoAlterado(event.target.value)
    
    };

    return(
        <div className="container">
            <label htmlFor="nome">{props.label}</label>
            <input  value={props.valor}  onChange={aoMudar} required={props.obrigatório} type="text" id="nome" placeholder= {props.placeholder} />
        </div>                                                  // tal como numa parametro de função botamos aqui o parametro que queremos incluir dinamicamente quando chamarmos a função em outro lugar   
    )
}






     // o valor aqui fica como se fosse uma variavel e o set input é um ganho que devemos usar toda vez que queremos alterar o estado dela. Se o valor no set muda o da estado tbm muda pq o set funciona justamente como um gancho pra avisar que o estado tem que mudar
   // let [valor, setValor] = useState("Luiz Felipe");

   // o que eu fiz agora é passar essa formula por props pra tornar esse valor dinamico