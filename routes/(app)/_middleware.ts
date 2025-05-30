import { FreshContext } from "$fresh/server.ts";

type State = {
    dni: string
}


export const handler = async (req: Request, ctx: FreshContext) => {

  

    const cookie = req.headers.get("Cookie");
    if (cookie && cookie.includes("dni=")) {
        
        const dni = cookie.split("dni=")[1].split(";")[0];
        ctx.state = {dni};
        const resp = await ctx.next();
        return resp;
    } else {
        return Response.redirect(new URL("/login", req.url));
    }
}
