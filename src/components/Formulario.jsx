import { useState } from "react";
import useClima from "../hooks/useClima"
const Formulario = () => {
  const [alerta, setAlerta] = useState('')
  const {handleChangeBusqueda, busqueda, consultarClima, setResultado} = useClima()
  const {ciudad,pais} = busqueda;

  const handleSubmit = e => {
    e.preventDefault()
    setResultado({})
    if(Object.values(busqueda).includes('')){
        setAlerta('Todos los campos son obligatorios')
        return
    }
    setAlerta('')
    consultarClima(busqueda)
    


  }


  return (
    <div className='contenedor'>
        {alerta && <p>{alerta}</p> }
        <form onSubmit={handleSubmit}>
            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input 
                    type="text" 
                    name="ciudad" 
                    id="ciudad" 
                    placeholder='Escribe tu ciudad'
                    value={ciudad}
                    onChange={e => handleChangeBusqueda(e)}
                />
            </div>
            <div className="campo">
                <label htmlFor="pais">Pais</label>
                <select 
                    name="pais" 
                    id="pais"
                    value={pais}
                    onChange={e => handleChangeBusqueda(e)}
                >
                    <option value="">Seleccione un pais</option>
                    <option value="MX">Mexico</option>
                    <option value="US">Estados Unidos</option>
                    <option value="CO">Colombia</option>
                    <option value="AR">Argentina</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                  
                </select>
            </div>

            <input type="submit" value="Consultar Clima" />
        </form>
    </div>
  )
}

export default Formulario