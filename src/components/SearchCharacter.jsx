// Estilos para este componente
import "../assets/css/SearchCharacter.css";

const SearchCharacter = () => {
    return(
        <div className="cont-search">
            <input type="search" placeholder="Buscar Personaje" />
            <button className="btn btn-search" type="submit">Buscar</button>
        </div>
    )
}

export { SearchCharacter };