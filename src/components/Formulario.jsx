import React from 'react'

const Formulario = () => {
  return (
    <div className='contenedor'>
        <form>
            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input 
                    type="text" 
                    name="ciudad" 
                    id="ciudad" 
                    placeholder='Escribe tu ciudad'
                />
            </div>
            <div className="campo">
                <label htmlFor="pais">Pais</label>
                <select name="ciudad" id="ciudad">
                    <option value="">Seleccione un pais</option>
                    <option value="MX">Mexico</option>
                    <option value="EU">Estados Unidos</option>
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