import { FreshContext, Handlers, PageProps } from "$fresh/server.ts"
import { CharacterPage } from "../../components/CharacterPage.tsx";
import { Character } from "../../utils/types.ts";





export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext <unknown, Character>) => {

        const { id } = ctx.params;
        try {
            const json = await fetch(`https:/rickandmortyapi.com/api/character/${id}`)
            const response:Character = await json.json();

            return(ctx.render(response))
        } catch (error) {
            return new Response("Error: " + error)
        }
    },
};


const Page = (props: PageProps <Character>) => {
    return (
    <div>
    <CharacterPage {...props.data}/> 
    </div>
    )
}

export default Page;