import React from "react";
import "../style/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"
        src={require(`../imagen/${props.imagen}.png`)}
        alt="foto de cazuela" />
      <div className="contenedor-opinion">
        <p className="contenedor-nombre">{props.nombre} en {props.pais}</p>
        <p className="contenedor-cargo">{props.cargo}</p>
        <p className="Contenedor-texto">{props.texto}</p>
      </div>
    </div>

  );
}

export default Testimonio;