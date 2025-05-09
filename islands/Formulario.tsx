import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";




const Formulario: FunctionalComponent = () => {

  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  
  const handleClick = () => {
    if (input.length != 9) {
      setError(true);
    }
  }

  const handleInput = (e: any) => {
    setInput(e.currentTarget.value)
    setError(false)
  }

  return (
    <div>
      <input type="text" name="telefono" placeholder="Telefono" value={input} onInput={handleInput}/>
      <button type="button" onClick={handleClick} >Enviar</button>
      { error ? <div>El número introducido no es correcto</div> : <div>{input}</div> }
    </div>
  )
}

export default Formulario;