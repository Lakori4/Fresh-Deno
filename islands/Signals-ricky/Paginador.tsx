import { FunctionComponent } from "preact/src/index.d.ts";
import { page } from "../../utils/signals.ts";

const Paginador: FunctionComponent = () => {

  const pgUp = () => {
    if (page && page.value < 42) {
      page.value = page.value +1    }
  }

    const pgDn = () => {
    if (page && page.value > 0) {
      page.value = page.value -1
    }
  }

  return (
    <div>
      <button type="button" onClick={pgDn}>Previous</button>
      <button type="button" onClick={pgUp}>Next</button>
    </div>
  )
}

export default Paginador