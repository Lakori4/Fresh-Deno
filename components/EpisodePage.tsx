import { FunctionalComponent } from "preact/src/index.d.ts";
import { Episode } from "../utils/types.ts";
import CharactersGrid from "./CharactersGrid.tsx";



export const EpisodePage: FunctionalComponent<Episode> = (data) => {


  return (


    <CharactersGrid char={characters}/>
  )
}