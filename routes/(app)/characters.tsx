import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";



export const handler:Handlers<string, {dni: string}> = {

    GET: (_req: Request, ctx:FreshContext<{dni: string}>) => {

        const dni = ctx.state.dni;
        console.log(dni);
        return ctx.render(dni);
    }
}

export const Page = (props: PageProps<string>) => (<div>Estoy aquí {props.data}</div>)