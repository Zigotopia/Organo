import "./listaSuspensa.css"

export const ListaSuspensa = (props)=>{
    return(
       
      <div className="lista_suspensa">
        <label >{props.label}</label>
        <select  valor= {props.value} onChange={ event => props.aoAlterado(event.target.value)}>
            {props.itens.map(item => <option key={item}>{item}</option>)} 
        </select>
        
      </div>
    )
}

// utilizei o map aqui para pegar o array de times e meter dentro do select como um novo array e o key para o react monitorar o item