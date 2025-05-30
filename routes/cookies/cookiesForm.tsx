import { FreshContext, Handlers } from "$fresh/server.ts";



export const handler:Handlers = {
    GET: (req: Request, ctx: FreshContext) => {
        const url = new URL(req.url);
        const name = url.searchParams.get("name")
        const age = url.searchParams.get("age")

        const headers = new Headers();

        if (name && age) {
            headers.set(
                "Set-Cookie",
                `name=${encodeURIComponent(name)}; path=/`
            )
            headers.append(
                "Set-Cookie",
                `age=${encodeURIComponent(age)}; path=/`
            )
        }
        return ctx.render({name, age})
    }
}

const Page = ({name, age}: {name: string, age: number}) => {

    return (
        <form method="get">
            <input type="text" name="name" placeholder="Tu nombre" value={name}/>
            <br />
            <input type="number" name="age" placeholder="Tu edad" value={age}/>
            <br />
            <button type="submit">Enviar</button>
        </form>
    )
} 

export default Page;