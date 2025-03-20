import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Button from "../components/Button.tsx";
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
      const json = await fetch(url);
      const response = await json.json()

      return (ctx.render({ results: response.results }));
      
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


const B1 = () => {
  return (
    <div>
      <h1>Buttons</h1>

      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>

    </div>
  )
}

export default B1;
 