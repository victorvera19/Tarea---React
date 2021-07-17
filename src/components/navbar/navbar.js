import { useState } from "react"

const Navbar = () => {
        const [user, setUser] = useState(null)

        const login = () => {
        setUser({id:1,nombre: "VictorVera"})
        }

        const logout = () => {
            setUser(null)
            }

    return (
        <nav className="navbar navbar-light bg-info bg-gradient">
            <div className="container-fluid">
              <span className="navbar-brand mb-0 fs-4 text-white">User:{user? user.nombre: "No autentificado"}</span>
              {user 
              ? (
                <button 
                type="button" 
                className="btn btn-outline-light"
                onClick = {logout}
                >Cerrar Sesion
                </button>)
              :(<button 
                type="button" 
                className="btn btn-outline-light"
                onClick = {login}
                >Iniciar Sesion
                </button>)              
                }               
            </div>
        </nav>
    )
}

export default Navbar
