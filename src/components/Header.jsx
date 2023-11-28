const Header = () => {
    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Barra de Navegación</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar personaje" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    )
}

export { Header };