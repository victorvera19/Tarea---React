import Cards from "./cards"
import React, { Children, useEffect, useState } from 'react'
//import celebridades from '../helpers/Usuarios'

const Listcards = () => {
    const [celebridades, setCelebridades] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        const getUsuarios = async ()=> {
            try {
                const res = await fetch ("https://randomuser.me/api/?results=40") //Llamar Api
                const data = await res.json()
                setCelebridades(data.results)
                setError(false)

            } catch (err) {
                console.log(err)
                setError(true)
            }
            //console.log(data.results)
        } 
        getUsuarios()
    }, [])
    if (error){
        return <div class="alert alert-danger" role="alert">
        Error al cargar el api <a href= "https://randomuser.me" class= "alert-link"> Verifique el link </a> 
        </div>
    }
    return (
        <div className="container">
            <div className="row ">
            { celebridades.map(user => (
                <div className="col-sm-4" key={user.login.uuid}>
                    <Cards user={user}/>
                </div> 
            ))}   
        </div>
        </div>
    )
}

export default Listcards
