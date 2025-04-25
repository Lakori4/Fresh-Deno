import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";

const RickyList: FunctionalComponent = () => {

  const [characters, setCharacters] = useState<string[]>()

  useEffect(() => {
    getCharacter();
  })

  const getCharacter = async () => {
    const json = await fetch ("https://rickandmortyapi.com/api/character/");
    const data = await json.json()
    setCharacters(data.results.map(e => e.name))
    console.log(characters);
  }

  return (
    <div>
      
      <ul>
        {characters?.map(e => <li>{e}</li>)}  
      </ul>
    </div>
  )
}

export default RickyList;