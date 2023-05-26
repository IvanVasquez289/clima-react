import { useState, createContext } from "react";
import axios from "axios";
const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

    // console.log(import.meta.env.VITE_API_KEY)

    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })
    
    const [resultado, setResultado] = useState({})

    const [cargando, setCargando] = useState(false)

    const [noResultado, setNoResultado] = useState(false)

    const handleChangeBusqueda = e => {
        setBusqueda({...busqueda, [e.target.name]:e.target.value})
    }

    const consultarClima = async datos => {
        setCargando(true)
        setNoResultado(false)
        try {
            const {ciudad,pais} = datos;
            const appId = import.meta.env.VITE_API_KEY
            
            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}` 

            const {data} = await axios(url)
            const {lat, lon} = data[0]
            
            const urlCLima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const {data: clima} = await axios(urlCLima)
            setResultado(clima)
            
        } catch (error) {
            // console.log(error)
            setNoResultado(true)
        } finally {
            setCargando(false)
        }
    }

    
    return (
        <ClimaContext.Provider
            value={{    
                handleChangeBusqueda,
                busqueda,
                consultarClima,
                resultado,
                cargando,
                noResultado,
                setResultado
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export {
    ClimaProvider,
}

export default ClimaContext