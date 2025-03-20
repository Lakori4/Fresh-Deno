import { FreshContext, Handlers, PageProps } from "$fresh/server.ts"
import Axios from "axios"
import {Character} from "../../components/CharacterContainer.tsx";

/*


*/

type CharacterAPI = {
    name: string,
    status: string,
    type: string,
    gender: string,
    origin: { name: string },
    image: string,
    episode: string[],
}

type EpisodeAPI = {
    id: string,
    name: string,
    url:string,
}


type Data = {
    name: string,
    status: string,
    type: string,
    gender: string,
    origin: string,
    image: string,
    episodes: EpisodeAPI[],
}


export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext <unknown, Data>) => {
        const {id} = ctx.params;
        const url = `https://rickandmortyapi.com/api/character/${id}`;
        try {
            const response = await Axios.get<CharacterAPI>(url);
            const episodes = (await Promise.all(response.data.episode.map(
                async (ep) => await Axios.get<EpisodeAPI>(ep)
            ))).map(e => e.data);


            const character: Data = {
                ...response.data,
                origin:  response.data.origin.name,
                episodes                    
            };
            
            return ctx.render((character));

        } catch (e) {
            return new Response("Error: " + e)
        }
    },
};


const Page = (props: PageProps <Data>) => {
    return (
    <div>
    <Character character={props.data}/> 
    </div>
    )
}

export default Page;