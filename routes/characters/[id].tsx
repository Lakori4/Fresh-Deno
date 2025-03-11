import { FreshContext, Handlers, PageProps } from "$fresh/server.ts"
import Axios from "axios"
import {Character} from "../../components/Character.tsx";

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
        console.log(id)
        try {
            const character = await Axios.get<CharacterAPI>(`https://rickandmortyapi.com/api/character/${id}`, );
            
            const episodesURL = character.data.episode;
            console.log(character.data);

            const episodes: EpisodeAPI[] = await Promise.all(
                episodesURL.map(async (url) => {
                const ep = await Axios.get<EpisodeAPI>(url);
                return ep.data;
            }),);
            


            return ctx.render({
                name: character.data.name,
                type: character.data.type,
                origin: character.data.origin.name,
                image: character.data.image,
                gender: character.data.gender,
                status: character.data.status,
                episodes,
            });

        } catch (e) {
            return new Response("Error: " + e)
        }
    },
};


const Page = (props: PageProps <Data>) => {
    { console.log("Page"); }
    return (
    <div>
    <Character character={props.data}/> 
    <p>buenas</p>
    </div>
    )
}

export default Page;