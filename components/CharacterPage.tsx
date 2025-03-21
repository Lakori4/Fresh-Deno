import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/types.ts";

export const CharacterPage:FunctionalComponent<Character> = (char) => {


  return (
    <div>
      <h1>{char.name}</h1>
        {/*  <CharacterPage name={char.name} origin={char.origin} status={char.status} image={char.image}/>
       <ul>{char.episode.map((ep) => <li><a href={`/episode/${ep.id}`}>{ep.name}</a></li>)}</ul> */}
    </div>
  )
}