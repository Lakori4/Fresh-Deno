import { useEffect, useRef, useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/types.ts";

const RickyList: FunctionalComponent = () => {

  const [names, setNames] = useState<string[]>([("")])
  //const [search, setSearch] = useState<string>("")
  const [page, setPage] = useState<number>(1)
  const timeout = useRef<any> (undefined)

  const searchRef = useRef<string>("")


  const getCharacter = async () => {

    const json = await fetch (`https://rickandmortyapi.com/api/character?name=${searchRef.current}&page=${page}`);
    const data = await json.json()    
    setNames(data.results.map((e : Character) => e.name))
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
  }, [searchRef.current]);

  return (
    <div>
     {/*  <input type="text" name="nombre" placeholder="Nombre" value={search} onInput={(e) => setSearch(e.currentTarget.value)}/> */}
      <input type="text" name="nombre" placeholder="Nombre" value={searchRef.current} onInput={(e) => searchRef.current = (e.currentTarget.value)}/>

      <br />
      <button type="button" onClick={pgDn}>Down page</button>
      <button type="button" onClick={pgUp}>Next page</button>
      <ul>
        {names?.map(e => <li key={e}>{e}</li>)}  
      </ul>
    </div>
  )
}

export default RickyList;