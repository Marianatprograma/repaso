import "./App.css";
import { Hijo } from "./components/Hijo";
import { Mascota } from "./components/Mascota";
import { Mom } from "./components/Mom";


function App() {

  const hijos = [
    {nombre: "Raul", edad: 14, mayorEdad: false},
    {nombre: "Marcela", edad: 23, mayorEdad: true},
    {nombre: "Matias", edad: 19, mayorEdad: true}

  ]
  

  return (
    <div className="App">
      <h1> Esta es nuestra app de repaso</h1>

      <Mascota nombre="tita" edad="4"/>
      <Mascota nombre="niño" edad="7" estado="castrado"/>       
      


      <br />
      <Mom nombre="Olga" />
      <br />
      <Mom nombre="Marta" />
      <br />
      <div>
      {hijos.map(hijo => (<Hijo 
        key = {hijo.nombre}
        nombre = {hijo.nombre}
        edad = {hijo.edad}
        mayorEdad = {hijo.mayorEdad}


      />))
      
      
      }

      </div>


      <Hijo nombre = 'Esteban' edad="" />
      
    </div>
  );
}

export default App;
