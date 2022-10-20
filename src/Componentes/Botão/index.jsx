import './botão.css'

 export const Botão = (props)=> {
    return(

        <button className='botão'>{props.children}</button>
    )
}

// props.children é uma outra forma de usar o props, quando usado desse modo podemos insererir um campo com varios coisas inclusve outros componentes dentro de um valor de um só