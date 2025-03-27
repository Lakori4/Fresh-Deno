// deno-lint-ignore-file jsx-key
import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character, Episode, EpsChar } from "../utils/types.ts";

export const CharacterPage:FunctionalComponent<EpsChar> = (data) => {

  const char = data.character
  const ep = data.episodes

  return (
    <div class= "characterPage">
      <h1>{char.name}</h1>
      <div class="characterDetailed">
        <img src={char.image} alt={char.name}/>
        <div>
          <div>ID: {char.id}</div>
          <div>Status: {char.status}</div>
          <div>Species: {char.species}</div>
          {char.type ? <div>Type: {char.type}</div>: null}
          <div>Gender: {char.gender}</div>
          <div>Origin: {char.origin.name}</div>
          <div>Location: {char.location.name}</div>
        </div>
      
      <ul>{ep.map((ep) => <li><a href={`./../episode/${ep.id}`}>{ep.name}</a></li>)}</ul>
      </div>
    </div>
  )
}