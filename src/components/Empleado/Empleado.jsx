import './Empleado.css'

function Empleado({name, number, mail, image, onClose}) {
    return (
        <div className='container'>
        <div className= 'cerrar'>
          <button className= 'btn' onClick={onClose}>X</button>
          </div>
        <div className='content'>
            <img src={image} alt={"employee"} className="picture"/>
            <div className='text'>
                <h3>{name}</h3>
                <h3>{number}</h3>
                <h3>{mail}</h3>
            </div>
            </div>
        </div>
    )
}

export default Empleado
