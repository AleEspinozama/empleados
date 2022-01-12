import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import './Agregar.css'


function Agregar() {

    const [empleados, setEmpleados] = useOutletContext();
    let navigate = useNavigate();

    //estado inicial del form
    const[InputEmployee, setInputEmployee] = useState(
        {
            name:'',
            mail:'',
            number:'',
            image: 'http://storyv.com/wp-content/uploads/2020/03/awkward-smile.jpg'
        }
    )   
    //función para agregar empleado 
    function addEmployee (employee){
        employee.id = Math.floor(Math.random() * 1000);
        setEmpleados(oldEmpleados=> [...oldEmpleados, employee]);
    }
//estado inicial de los errores
    const [errors, setErrors] = useState({});

    //función para validar inputs
function validate(InputEmployee) {
    let errors = {};
    if (!InputEmployee.name) {
      errors.name = 'Por favor, ingresa un nombre';
    } else{
        for(var i=0; i<empleados.length; i++){
            if(empleados[i].name === InputEmployee.name) errors.name = 'Usuario ya registrado';
        }
    }
  
    if(!InputEmployee.mail){
      errors.mail = 'Por favor, ingresa un correo';
    }
    else {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(InputEmployee.mail))
        errors.mail = 'Por favor, ingresa un correo válido';
    }


    if(!InputEmployee.number){
        errors.number = 'Por favor, ingresa un teléfono';
    }

    return errors;
  };

//manejar los cambios en los inputs
    function handlerOnChange (e){
        setInputEmployee({
            ...InputEmployee,
            [e.target.name]:e.target.value
        }) 
        setErrors(validate({
            ...InputEmployee,
            [e.target.name]: e.target.value
          }));
    }


//enviar los datos al array 
function handleOnSubmit(e){
    e.preventDefault()

    if(Object.keys(errors).length !== 0 || InputEmployee.name === '') {
         Swal.fire('Por favor, rellena todos los campos correctamente')
    }
    else {
        addEmployee(InputEmployee);
        Swal.fire(
            '¡Empleado agregado!',
            '¡Agregado correctamente!',
            'success'
          )

        setInputEmployee({
            name:'',
            mail:'',
            number:'',
            image: 'http://storyv.com/wp-content/uploads/2020/03/awkward-smile.jpg'
        });
        navigate('/empleados');
    }
}
    return (
        <div>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <h1>Ingresa los datos del empleado</h1>
                <div className="inputs">
                {/* Name */}
                    <div className="input">
                    <label>Nombre</label>
                    <input type="text"  placeholder="Nombre" name="name" onChange={handlerOnChange} value={InputEmployee.name}/>
                    {errors.name && (<p className="danger">{errors.name}</p>)} 
                    </div>
                {/* Mail */}
                    <div className="input">
                    <label>Mail</label>
                    <input type="text" placeholder="example@example.com" name="mail" onChange={handlerOnChange} value={InputEmployee.mail}/>
                    {errors.mail && (<p className="danger">{errors.mail}</p>)} 
                    </div>
                {/* Number */}
                    <div className="input">
                    <label>Number</label>
                    <input type="number" placeholder="7870998098" name="number" onChange={handlerOnChange} value={InputEmployee.number}/>
                    {errors.number && (<p className="danger">{errors.number}</p>)} 
                    </div>
                {/* Photo URL */}
                    <div className="input">
                    <label>Photo URL</label>
                    <input type="text" placeholder="7870998098" name="image" onChange={handlerOnChange} value={InputEmployee.image}/>
                    </div>
                    <div>
                    <button type="submit" className="button">Guardar</button>
                    </div>
                </div>

            </form>
            {/* <Link to="/empleados" className="boton right">Regresar</Link> */}
        </div>
    )
}

export default Agregar
