import { FunctionComponent } from "preact/src/index.d.ts";

const Header:FunctionComponent= () => {

  return (

    <div>
      <div><a href="/add">Añadir Contacto</a> </div>
      <div><a href="/list">Listar Contacto</a> </div>
    </div>
  )
}

export default Header;