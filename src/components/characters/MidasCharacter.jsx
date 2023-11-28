// Estilos para este componente
import "../../assets/css/CharacterCard.css";

import React, { useState } from "react";

export default function MidasCharacter() {
    const modelRef = React.useRef();
    const [annots, setAnnots] = useState([]);

    const handleClick = (event) => {
        const { clientX, clientY } = event;
        if (modelRef.current) {
            let hit = modelRef.current.positionAndNormalFromPoint(clientX, clientY);
            if (hit) {
                setAnnots((annots) => {
                return [...annots, hit];
                });
            }
        }
    };

    return (
        <div className="cont-card-character">
            <model-viewer className="cont-caracter-card" src="./model/Midas.glb" ar ar-modes="webxr scene-viewer quick-look" 
            camera-controls shadow-intensity="1" onClick={handleClick} 
                ref={(ref) => { modelRef.current = ref; }} >
                {annots.map((annot, idx) => (
                    <button
                        key={`hotspot-${idx}`}
                        className="view-button"
                        slot={`hotspot-${idx}`}
                    ></button>
                ))}
            </model-viewer>

            <div className="cont-content-card">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, modi asperiores nobis debitis quod cumque doloremque. 
                    Sunt accusantium provident necessitatibus a, libero at nostrum ad quaerat doloremque laborum, quo aut?
                </p>
            </div>
        </div>
    );
}
