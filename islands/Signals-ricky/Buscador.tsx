import { FunctionComponent } from "preact/src/index.d.ts";
import { search, page } from "../../utils/signals.ts"
import { useState } from "preact/hooks";


const Buscador: FunctionComponent = () => {

  const [temp_search, setTempSearch] = useState<string>("")
  //State variable to store user input before it clicks the button

  return (
    <div>
      <input type="text" name="nombre" placeholder="Nombre"  onInput={(e) => setTempSearch(e.currentTarget.value)}/>
      <button type="button" onClick={() => {search.value = temp_search; page.value = 1}}>Buscar</button>
    </div>
  )
}

export default Buscador