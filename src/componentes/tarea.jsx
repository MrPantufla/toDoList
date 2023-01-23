import "../stylesheets/tarea.css";
import {AiFillDelete} from "react-icons/ai";

function Tarea({id, completarTarea, eliminarTarea, texto, completada}){

  return(
    <div className={completada ? "contenedor-tarea completada" : "contenedor-tarea"}>
      <div className="texto-tarea" onClick={()=> completarTarea(id)}>
        {texto}
      </div>
      <div className="iconos-tarea" onClick={()=>eliminarTarea(id)}>
        <AiFillDelete/>
      </div>
    </div>
  );
}

export default Tarea;