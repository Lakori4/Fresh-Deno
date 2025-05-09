import { FunctionComponent } from "preact/src/index.d.ts";
import { mySignal } from "../../utils/signals.ts"


const SignalInput: FunctionComponent = ()  => {
  return(

    <div>
      <input type="text" value={mySignal.value} onInput={(e) => mySignal.value = e.currentTarget.value}/>
    </div>
  )
}

export default SignalInput;