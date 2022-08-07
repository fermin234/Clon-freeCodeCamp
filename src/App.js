import './App.css';
import Testimonio from './components/Testimonio';
import data from './data.js'

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          data = {data}
        />
      </div>
    </div>
  );
}

export default App;
