import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";

const RickyList: FunctionalComponent = () => {

  const [characters, setCharacters] = useState<string[]>()
  const [search, setSearch] = useState<string>()

  useEffect(() => {
    getCharacter();
  }, [search])

  const getCharacter = async () => {
    const json = await fetch (`https://rickandmortyapi.com/api/character?name=${search}`);
    const data = await json.json()
    setCharacters(data.results.map((e) => e.name))
    console.log(characters);
  }

  return (
    <div>
      <input type="text" name="nombre" placeholder="Nombre" value={search} onInput={(e) => setSearch(e.currentTarget.value)}/>
      <ul>
        {characters?.map(e => <li>{e}</li>)}  
      </ul>
    </div>
  )
}

export default RickyList;