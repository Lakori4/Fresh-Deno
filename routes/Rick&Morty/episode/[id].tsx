import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { EpisodePage } from "../../../components/EpisodePage.tsx";
import { Episode } from "../../../utils/types.ts";



export const handler:Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Episode>) => {
    const { id } = ctx.params;

    try {
      const json = await fetch(`https://rickandmortyapi.com/api/episode${id}`);
      const results: Episode = await json.json();

      return (ctx.render(results))
    } catch (error) {
      return new Response ("Error: " + error)
    }
  }
}

const Page = (props: PageProps<Episode>) => {


  return (

    <div>
      <EpisodePage {...props.data}/>
    </div>
  )
}


export default Page;
