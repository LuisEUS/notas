import { useState } from "react"

function App() {
  //TODO: Presentar el concepto del "state"
  //hooks
 const [pruebaState, setPruebaState] = useState("");

  const handleChangePrueba = (event) => {
    setPruebaState(event.target.value); 
  };
  
  return (
    <div className="App">
      <h3>Hola</h3>
      <label htmlfor = "pruebaID">Input de prueba</label>
      <input 
        id = "pruebaID" 
        name = "prueba" 
        type = "text" 
        onChange = {handleChangePrueba}
        value = {pruebaState}
      />
    </div>
  );
}

export default App;
