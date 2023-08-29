
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Nuestro grupo de trabajo en cazuelas Esto es lo que dicen:</h1>
        <Testimonio
          nombre='Juan Carlos Martinez M'
          pais='Colombia'
          cargo='Ingeniero de software'
          texto='Declaración que hace una persona para demostrar o asegurar la veracidad de un hecho por haber sido testigo de él.
        "el diario de la mañana afirma que según testimonios de las últimas personas que han podido abandonar el país ocupado, el ejército iraquí está llevando a cabo un registro sistemático, casa por casa, en busca de ciudadanos estadounidenses"'
          imagen='' />
      </div>
    </div >
  );
}

export default App;
