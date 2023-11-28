import React from "react";

// Estilos para este componente
import "../assets/css/CharactersGallery.css";

// Componentes
// import RockCharacter from "./characters/RockCharacter"; 
import MidasCharacter from "./characters/MidasCharacter";
import MasterChiefCharacter from "./characters/MasterChiefCharacter";
import SwordManCharacter from "./characters/SwordManCharacter";
import WolfSpiderCharacter from "./characters/WolfSpiderCharacter";

export default function CharactersGallery (){
    return(
        <React.Fragment>
            {/* Componente Tarjeta de personaje */}
            <div className="characters-gallery">
                {/* <RockCharacter /> */}
                <MidasCharacter />
                <MasterChiefCharacter />
                <SwordManCharacter />
                <WolfSpiderCharacter />
            </div>
        </React.Fragment>
    )
}