import { useEffect, useRef, useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/types.ts";

const RickyList: FunctionalComponent = () => {

  const [names, setNames] = useState<string[]>([])
  const [search, setSearch] = useState<string>("")
  const [error, setError] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [maxPages, setMaxPages] = useState<number>(1)
  const timeout = useRef<number>(0)


  const getCharacter = async () => {

    const response = await (await fetch (`https://rickandmortyapi.com/api/character?name=${search}&page=${page}`)).json();
    

    if (response.results) {  
      setNames(response.results.map((e: Character) => e.name)); 
      setError(false); 
      setMaxPages (response.info.pages);
    } else {
      setError(true)
    }
  }


  const pgUp = () => {
    if (page && page < maxPages) {
      setPage(page + 1)
    }
  }

  const pgDn = () => {
    if (page && page > 1) {
      setPage(page - 1)
    }
  }

  useEffect(() => {
    getCharacter();
    
  }, [page])  


  useEffect(() => {
    if (timeout) {
      clearTimeout(timeout.current)
      timeout.current = setTimeout(getCharacter, 250)
      setPage(1);
    }
  }, [search]);

  return (
    <div>
     {/*  <input type="text" name="nombre" placeholder="Nombre" value={search} onInput={(e) => setSearch(e.currentTarget.value)}/> */}
      <input type="text" name="nombre" placeholder="Nombre" value={search} onInput={(e) => setSearch(e.currentTarget.value)}/>

      {error ? <p>No hay resultados para tu búsqueda</p> : <ul> {names.map(e => <li key={e}>{e}</li>)} </ul> }

      <h3>Page {page} of {maxPages}</h3>
      <button type="button" onClick={pgDn}>Previous</button>
      <button type="button" onClick={pgUp}>Next</button>

    </div>
  )
}

export default RickyList;