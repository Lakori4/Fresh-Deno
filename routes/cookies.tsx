import { getCookies } from "$std/http/cookie.ts"
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Cookie from "../islands/Cookie.tsx";




export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext) => {
        const cookies = getCookies(req.headers)
        console.log(cookies)
        return (ctx.render(cookies))
    }
} 

const Page = (props: PageProps) => {

    return (
        <div>
            <Cookie></Cookie>
            <h2><a href="./cookies/cookiesForm">Server-side Cookies</a></h2>

        </div>
    )
}

export default Page;