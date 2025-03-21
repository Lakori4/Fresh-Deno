import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharactersGrid from "../components/CharactersGrid.tsx";
import { Character } from "../utils/types.ts";



type Data = {
  results: Character[];
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const url = "https://rickandmortyapi.com/api/character/";
    try {
      const json = await fetch(url);
      const response = await json.json()

      return (ctx.render({ results: response.results }));
      
    } catch (e) {
      return new Response("Error de API: " + e);
    }
  },
};

export default (props: PageProps<Data>) => {
  const characters = props.data.results
  //console.log(characters)
  return (
    <div>
      <h1>Rick and Morty Characters</h1>
    
       <CharactersGrid chars={characters} />
        
      
    </div>
  )
}

