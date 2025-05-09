import { FunctionComponent } from "preact/src/index.d.ts";
import { page, search } from "../../utils/signals.ts"
import { useEffect, useState } from "preact/hooks";

const Resultados: FunctionComponent = () => {

  const [characters, setCharacters] = useState<string[]>([("")])
  

  const getCharacter = async () => {

    const json = await fetch (`https://rickandmortyapi.com/api/character?name=${search.value}&page=${page.value}`);
    const data = await json.json()    
    setCharacters(data.results.map((e) => e.name))
  }

  useEffect(() => {
    getCharacter();
    
  }, [search.value, page.value])  

  return (
    <div>
      <ul>
        {characters?.map(e => <li>{e}</li>)}  
      </ul>
    </div>
  )
}

export default Resultados