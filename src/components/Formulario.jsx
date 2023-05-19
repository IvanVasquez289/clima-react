import useClima from "../hooks/useClima"
const Formulario = () => {
  const {handleChangeBusqueda} = useClima()

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
                    onChange={e => handleChangeBusqueda(e)}
                />
            </div>
            <div className="campo">
                <label htmlFor="pais">Pais</label>
                <select 
                    name="pais" 
                    id="pais"
                    onChange={e => handleChangeBusqueda(e)}
                >
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