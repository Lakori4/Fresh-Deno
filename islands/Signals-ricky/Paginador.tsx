import { FunctionComponent } from "preact/src/index.d.ts";
import { maxPages, page } from "../../utils/signals.ts";

const Paginador: FunctionComponent = () => {

  const pgUp = () => {
    if (page && page.value < maxPages.value) {
      page.value = page.value + 1
    }
  }

    const pgDn = () => {
    if (page && page.value > 1) {
      page.value = page.value -1
    }
  }

  return (
    <div>
      <h3>Page {page.value} of {maxPages.value}</h3>
      <button type="button" onClick={pgDn}>Previous</button>
      <button type="button" onClick={pgUp}>Next</button>
    </div>
  )
}

export default Paginador