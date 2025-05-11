

import { getCookies } from "$std/http/cookie.ts"
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";




export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext) => {
        const cookies = getCookies(req.headers)
        debugger;
        console.log(cookies)
        return (ctx.render(cookies))
    }
} 

const Page = (props: PageProps) => {

    return (
        <div>
            Hola mundo
        </div>
    )
}

export default Page;