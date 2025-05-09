import { FunctionComponent } from "preact/src/index.d.ts";
import { mySignal } from "../../utils/signals.ts"


const SignalOutput: FunctionComponent = ()  => {
  return(

    <div>
      {mySignal.value}
    </div>
  )
}

export default SignalOutput;