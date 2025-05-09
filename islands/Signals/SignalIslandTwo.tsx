import { FunctionComponent } from "preact/src/index.d.ts";
import { mySignal } from "../../utils/signals.ts"


const SignalIslandTwo: FunctionComponent = ()  => {
  return(

    <div>
      <input type="text" value={mySignal.value}/>
    </div>
  )
}

export default SignalIslandTwo;