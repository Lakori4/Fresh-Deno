import Buscador from "../islands/Signals-ricky/Buscador.tsx";
import Paginador from "../islands/Signals-ricky/Paginador.tsx";
import Resultados from "../islands/Signals-ricky/Resultados.tsx";



const Page = () => {
  return (
    <div>
      <Buscador/> <Resultados/> <Paginador/>
    </div>
  )
}

export default Page;