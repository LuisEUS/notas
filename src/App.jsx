import { useState } from "react";

function App() {
  //Hooks
  const [inputState, setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",
  });

  const handleInputChange = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });

  };

  const handleResetClick = () =>{
    setInputState({
      ...inputState,
      titulo: "",
      fecha: "",
      nota: "",
    });

  }

  const handleClickGuardar =() =>{
    localStorage.setItem("notas", JSON.stringify(inputState));
  }
  
  return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <h3>Lista</h3>
        </div>

        <div className="col">
        <h3>Hola</h3>
        <label className="mb-2">
          Título 
          <input 
            id = "titulo" 
            name = "titulo" 
            type = "text" 
            onChange = {handleInputChange}
            value = {inputState.titulo}
        /></label>
        
        <br></br>
        <label className="mb-2">
          Fecha
          <input 
            id = "fecha" 
            name = "fecha" 
            type = "text" 
            onChange = {handleInputChange}
            value = {inputState.fecha}
        /></label>
        
        <br></br>
        <label htmlfor = "nota">
          Nota
          <input 
            id = "nota" 
            name = "nota" 
            type = "text" 
            onChange = {handleInputChange}
            value = {inputState.nota}
            style = {{width: "100%"}}

        /></label>

      <hr></hr>
      <div className="ms-2 me-2 mt-2 row">

      <div className="col">
        <span className="row me-1">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleResetClick}
          >
            Limpiar
          </button>
          </span>
        </div>

        <div className="col">
          <span className="row ms-1">
          
          <button 
            type="button"
            className="btn btn-secondary"
            onClick={handleClickGuardar}>
            Guardar
          </button>
          </span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
