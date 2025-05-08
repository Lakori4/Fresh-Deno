import { useEffect, useRef, useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";

const RickyList: FunctionalComponent = () => {

  const [characters, setCharacters] = useState<string[]>([("")])
  const [search, setSearch] = useState<string>("")
  const [page, setPage] = useState<number>(1)
  const timeout = useRef<any> (undefined)

  const getCharacter = async () => {

    const json = await fetch (`https://rickandmortyapi.com/api/character?name=${search}&page=${page}`);
    const data = await json.json()    
    setCharacters(data.results.map((e) => e.name))
  }


  const pgUp = () => {
    if (page && page < 42) {
      setPage(page + 1)
    }
  }

    const pgDn = () => {
    if (page && page > 0) {
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
      <input type="text" name="nombre" placeholder="Nombre" value={search} onInput={(e) => setSearch(e.currentTarget.value)}/>
      <br />
      <button type="button" onClick={pgDn}>Down page</button>
      <button type="button" onClick={pgUp}>Next page</button>
      <ul>
        {characters?.map(e => <li>{e}</li>)}  
      </ul>
    </div>
  )
}

export default RickyList;