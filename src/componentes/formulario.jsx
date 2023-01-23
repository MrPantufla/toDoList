import React, {useState} from 'react';
import "../stylesheets/formulario.css"
import {v4 as uuidv4} from 'uuid';

function Formulario(props){

  const [input, setInput] = useState("");

  const manejarCambio = e => {
    setInput(e.target.value);
    console.log(e.target.value)
  }

  const manejarEnvio = e => {
    e.preventDefault();
    
    const nuevaTarea = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(nuevaTarea);
    
  }

  return(
    <form className="formulario-tarea" onSubmit={manejarEnvio}>
      <input className="input-tarea" type="text" placeholder="Write a task" name="texto" onChange={manejarCambio} autoFocus/>
        <button className="boton-tarea">
          Add task
        </button>
    </form>
  );
}
export default Formulario;