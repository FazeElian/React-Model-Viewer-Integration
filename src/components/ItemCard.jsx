import React, { useState } from "react";

// Lista de Productos JSON
import dataItemCard from '../../../../json/views/Admin/categoriesTable.json';


class ItemCard extends React.Component {
    render() {
        return (
            <thead className="">
                {dataItemCard.map(item => (
                    <DataItemCard key={item.id} dataItemCard={item} />
                ))}
            </thead>
        );
    }
}

// Creación clase / objeto de Producto que va a componer su información
class DataItemCard extends React.Component {
    render() {
        // Creación variables de datos de Producto
        const { id, name, description } = this.props.dataItemCard;

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

        const getDataPosition = (annot) => {
            return `${annot.position.x} ${annot.position.y} ${annot.position.z}`;
        };

        const getDataNormal = (annot) => {
            return `${annot.normal.x} ${annot.normal.y} ${annot.normal.z}`;
        };

        return (
            <div className="cont-card-character">
                <model-viewer className="character-card" src="./model/M08.glb" alt="A rock" exposure="0.008"camera-controls
                    ar ar-modes="webxr" onClick={handleClick} ref={(ref) => { modelRef.current = ref; }} >
                    {annots.map((annot, idx) => (
                        <button
                        key={`hotspot-${idx}`}
                        className="view-button"
                        slot={`hotspot-${idx}`}
                        data-position={getDataPosition(annot)}
                        data-normal={getDataNormal(annot)}
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
}

export default ItemCard;
