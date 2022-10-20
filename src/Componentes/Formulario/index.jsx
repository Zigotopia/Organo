import { useState } from "react";
import { Botão } from "../Botão";

import FormText from "../FormText";
import { ListaSuspensa } from "../ListaSuspensa/listaSuspensa";
import './formulario.css'



 // criei os states aqui para que possam ser passados como props para os formtexts
const Formulario = (props) => {

  const [Nome, setNome] = useState("")
  const [Cargo, setCargo] = useState("")
  const [Imagem, setImagem] = useState("")
  const [Time, setTime] = useState("")




const SaveForm = (event) => {
  event.preventDefault();
  props.cadastrarColaborador({
    Nome,
    Cargo,
    Imagem,
    Time
   
  });
  setNome("")
  setCargo("")
  setImagem("")

};
    






  return (
    <section className="formulario">
      <form onSubmit={SaveForm}>
        <h3>Preencha os dados para criar o card do colaborador.</h3>
        <FormText
          label="Nome"
          obrigatório={true}
          placeholder="Digite seu Nome"
          valor={Nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <FormText
          label="Cargo"
          obrigatório={true}
          placeholder="Digite seu Cargo"
          valor={Cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <FormText
          label="Imagem"
          obrigatório={true}
          placeholder="Informe o endereço da imagem"
          valor={Imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label="Time"
          itens={props.timeNome}
          valor={Time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botão>Criar card</Botão>
      </form>
    </section>
  );
};


export default Formulario
