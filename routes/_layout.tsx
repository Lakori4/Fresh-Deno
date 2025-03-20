import { PageProps } from "$fresh/server.ts";

const Layout = (props: PageProps) => {
  const Component = props.Component;
  return(
    <div>
      <h1>Soy la primera página</h1>
      <Component/>
    </div>
  )
}

export default Layout