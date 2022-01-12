import './App.css';
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { getEmployees } from "./data"

function App() {

  //traer la mockup data o reestablecer la del local storage
  let data= getEmployees();
  const reset = JSON.parse(localStorage.getItem("empleados")) || null
  console.log(reset)
  const [empleados, setEmpleados] = useState( reset || data );

  return (
    <div className="App">
        <h1>Empleados</h1>
        <Link className="button" to="/empleados">Lista</Link> |{" "}
        <Link className="button" to="/agregar">Agregar</Link>
        <Outlet context={[empleados, setEmpleados]}/>
    </div>
  );
}

export default App;
