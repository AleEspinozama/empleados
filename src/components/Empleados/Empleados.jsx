import React, { useEffect } from 'react';
import Empleado from '../Empleado/Empleado'
import Swal from 'sweetalert2'
import './Empleados.css'
import { Link, useOutletContext } from 'react-router-dom';
import { AiOutlineUserAdd} from 'react-icons/ai';

function Empleados() {
    const [empleados, setEmpleados] = useOutletContext();

    function onClose(id) {
        setEmpleados(oldEmpleados => oldEmpleados.filter(c => c.id !== id));
      }   
      
      useEffect(() => {
        localStorage.setItem("empleados", JSON.stringify(empleados));
      }, [empleados]);

    return (
        <div>
            <div className= "grid">
                {
                empleados.map(c => (
                                <Empleado
                                key= {c.id} 
                                name={c.name} 
                                number= {c.number}
                                mail= {c.mail}
                                image={c.image}
                                id= {c.id}
                                onClose={()=>{
                                    Swal.fire({
                                        title: '¿Estás seguro?',
                                        text: "¡No podrás recuperarlo!",
                                        icon: 'warning',
                                        showCancelButton: true,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#d33',
                                        confirmButtonText: '¡Sí, bórralo!'
                                      }).then((result) => {
                                        if (result.isConfirmed) {
                                          onClose(c.id)
                                          Swal.fire(
                                            'Borrado',
                                            'Empleado borrado',
                                            'success'
                                          )
                                        }
                                      })
                                    
                                }  } 
                                />
                    ))
                }
             <Link to="/agregar" className='container'>
                 <div className='icon'>
                     <AiOutlineUserAdd size={80}/>
                     <h1>Agregar empleado</h1>
                     </div>
             </Link>
            </div>
        </div>
    )
}

export default Empleados
