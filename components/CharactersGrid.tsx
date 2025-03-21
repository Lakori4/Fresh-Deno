import { FunctionalComponent } from "preact/src/index.d.ts";
import CharacterThumbnail from "./CharacterThumbnail.tsx";
import { Character } from "../utils/types.ts";



type Props = {
  chars: Character[]
}



const CharactersGrid: FunctionalComponent<Props> = (props) => {

  const chars = props.chars
  console.log(chars)
  return (
    <div class="charactersGrid">
     {chars.map(e => (<CharacterThumbnail name={e.name} image={e.image} id={e.id}/>))}
    </div>
  )
}

export default CharactersGrid