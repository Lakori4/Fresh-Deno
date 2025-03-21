import { PageProps } from "$fresh/server.ts";

const Layout = (props: PageProps) => {
  const Component = props.Component;
  return(
    <div>
      <div class="header"> <a href="./"><h1>DenoFresh projects</h1></a></div>
      <Component/>
    </div>
  )
}

export default Layout