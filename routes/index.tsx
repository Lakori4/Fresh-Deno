import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import Character from "../components/Character.tsx";


type Character = {
  id: string;
  name: string;
  image: string;
  status: string,
};

type Data = {
  results: Character[];
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const url = "https://rickandmortyapi.com/api/character/";
    try {
      const response = await Axios.get<Data>(url);
      //console.log(response.data.results)
      return (ctx.render({ results: response.data.results }));
    } catch (e) {
      return new Response("Error de API: " + e);
    }
  },
};

const Page = (props: PageProps<Data>) => {
  const characters = props.data.results
  console.log(characters.map(e => e.status))
  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      
      {characters.map(e => (
       <Character name={e.name} image={e.image} status={e.status} />
        
      ))}
    </div>
  )
}

export default Page;
