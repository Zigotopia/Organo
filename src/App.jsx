import { useState } from "react";
import Banner from "./Componentes/banner/banner";


import Formulario from "./Componentes/Formulario";
import { Rodape } from "./Componentes/rodape";
import { Time } from "./Componentes/Time";

const times = [
  {
    nome: "Programação",
    corPrimaria: "#57C278",
    corSecundaria: "rgba(0, 200, 111, 0.15)",
  },
  { nome: "Front-End", corPrimaria: "#82CFFA", corSecundaria: "#E8FFFF" },
  { nome: "Data-Science", corPrimaria: "#A6D157", corSecundaria: "#E9FFE3" },
  {
    nome: "Devops",
    corPrimaria: "#E06B69",
    corSecundaria: " rgba(241, 97, 101, 0.15)",
  },
  {
    nome: "Ux and Design",
    corPrimaria: "#DB6EBF",
    corSecundaria: "rgba(220, 110, 190, 0.15)",
  },
  {
    nome: "Mobile",
    corPrimaria: "#FFBA05",
    corSecundaria: "rgba(255, 186, 5, 0.15)",
  },
  {
    nome: "Inovação e Gestão",
    corPrimaria: "#FF8A29",
    corSecundaria: " rgba(255, 140, 42, 0.15)",
  },
];

function App() {
  let [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorCadastrado = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador])
  }
                                                        // aqui estou utilizando o map na sua função mais básica, pega uma coisa e retorna outra transformada em um novo array
  return (
    <div className="App">
      <Banner />                        
      <Formulario timeNome={times.map(time => time.nome)}
        cadastrarColaborador={(colaborador) => aoNovoColaboradorCadastrado(colaborador)
          
        }
        colaborador={colaboradores}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => time.nome === colaborador.Time)} // passei aqui o colaboradores pra ser uma como o map dentro de times
        />
      ))}
      <Rodape/>
    </div>
  );
}

export default App;
// tal como na função informamos a props(parametro) dentro do componente
