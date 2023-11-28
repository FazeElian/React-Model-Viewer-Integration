import CharactersGallery from "./components/CharactersGallery";
import { SearchCharacter } from "./components/SearchCharacter";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      {/* Encabezado */}
      <Header />

      {/* Componente para búsqueda de personaje */}
      <SearchCharacter />

      {/* Galería de personajes */}
      <CharactersGallery />
    </>
  );
}

export default App;