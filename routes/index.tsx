import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import CharacterContainer from "../components/CharactersContainer.tsx";

type Character = {
  id: string;
  name: string;
  image: string;
};

type CharacterAPI = {
  results: Array<{
    id: string;
    name: string;
    image: string;
  }>;
};

type Data = {
  characters: Character[];
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const url = "https://rickandmortyapi.com/api/character/";
    try {
      const response = await Axios.get<CharacterAPI>(url);
      //console.log(response.data.results.map(ch => ch.image))
      return (ctx.render({ characters: response.data.results }));
    } catch (e) {
      return new Response("Error de API: " + e);
    }
  },
};

const Page = (props: PageProps<Data>) => {
  const characters = props.data.characters

  return (
  <CharacterContainer characters={characters}/>
  )
}

export default Page;
