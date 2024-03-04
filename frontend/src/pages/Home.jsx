import React from "react";
import {Link} from "react-router-dom"

function HomePage () {
    return (
        <div>
            <h2>Accueil</h2>
            <Link to="/registration">S'inscrire 
            </Link>
        </div>
    )
}

export default HomePage