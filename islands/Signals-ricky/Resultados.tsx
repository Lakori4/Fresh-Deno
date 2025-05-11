import { FunctionComponent } from "preact/src/index.d.ts";
import { page, search, error, maxPages } from "../../utils/signals.ts"
import { Character } from "../../utils/types.ts";
import { useEffect, useState } from "preact/hooks";

const Resultados: FunctionComponent = () => {

  const [names, setNames] = useState<string[]>([])
  

  const getCharacter = async () => {

    const response = await (await fetch (`https://rickandmortyapi.com/api/character?name=${search.value}&page=${page.value}`)).json();
    //API call to get the possible names of the characters
    //(response.results) ?  () => {setNames(response.results.map((e) => e.name)); error.value = false; maxPages.value = response.info.pages;} : error.value = true
    
    if (response.results) {
      setNames(response.results.map((e: Character) => e.name)); 
      error.value = false; 
      maxPages.value = response.info.pages;
    } else {
      error.value = true
    }
    //Checks if API call was succesful (by checking if .results exists), if it was then sets the names, gets max # of pages, unchecks error signal. If it wasn't then checks error signal
  }

  useEffect(() => {
    getCharacter();
                           
  }, [search.value, page.value])  

  return (
    <div>
      {error.value ? <p>No hay resultados para tu búsqueda</p> : <ul> {names.map(e => <li key={e}>{e}</li>)} </ul> }
      {/*If error is checked displays error message. If it isn't then displays a list of retrieved characters*/}
    </div>
  )
}

export default Resultados