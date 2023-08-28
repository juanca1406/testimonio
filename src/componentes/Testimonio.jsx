import React from "react";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"
        src={require("../imagen/peq.png")}
        alt="foto de cazuela" />
      <div className="contenedor-opinion">
        <p className="contenedor-nombre">Juan Carlos Martinez M</p>
        <p className="contenedor-cargo">Ingeniero de software en cazuelas</p>
        <p className="Contenedor-texto">Seguir para mejor mas</p>
      </div>
    </div>

  );
}

export default Testimonio;