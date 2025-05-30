import { FreshContext, Handlers } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";


export const handler:Handlers = {
    GET: (req:Request, ctx: FreshContext) => {
        /* const cookie = req.headers.get("cookie");
        const cookies = cookie ? cookie.split("; ") : []
        const name = cookies.find((row) => row.startsWith("name="));
        const value = decodeURIComponent(name ? ) name.split("=")[1];  */

        const cookies = getCookies(req.headers);
        const name = cookies.name;

        const headers = new Headers();
        headers.set("Set-Cookie", `ssr_name=${encodeURIComponent("ssr_" + name)}; path=/`);
        return ctx.render(name, {
            headers,
        });
    }
}

const Page = ({data} : {data: string}) => {
    return (
        <div>
            <h1>Cookie</h1>
            <p>Data: {data}</p>

        </div>
    )
}

export default Page;