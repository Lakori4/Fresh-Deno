import { FreshContext, Handlers, PageProps } from "$fresh/server.ts"
import { CharacterPage } from "../../../components/CharacterPage.tsx";
import { Character, Episode, EpsChar } from "../../../utils/types.ts";





export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext <unknown, EpsChar>) => {

        const { id } = ctx.params;
        try {
            const json = await fetch(`https:/rickandmortyapi.com/api/character/${id}`)
            const character:Character = await json.json();

            const epId = character.episode.map(e => e.split('/').pop());

            const episodes: Episode[] =  await Promise.all(epId.map(async id => {
                const json = await fetch (`https://rickandmortyapi.com/api/episode/${id}`);
                const results: Episode = await json.json();
                console.log(results)
                return (results);
            }))

            const char:EpsChar = {character, episodes}

            return(ctx.render(char))
        } catch (error) {
            return new Response("Error: " + error)
        }
    },
};


const Page = (props: PageProps <EpsChar>) => {

    //console.log(props);
    return (
    <div>
    <CharacterPage {...props.data}/> 
    </div>
    )
}

export default Page;