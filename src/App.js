import './App.css';
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { getEmployees } from "./data"

function App() {
  let data= getEmployees();
  const [empleados, setEmpleados] = useState(data);

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
