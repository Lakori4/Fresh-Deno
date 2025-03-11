import { FreshContext, Handlers } from "$fresh/server.ts";


export const handler:Handlers = {
  GET: (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const page = 
  }
}






export default function Home() {
  return (<div>Hola</div>)
} 
