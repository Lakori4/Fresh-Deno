import { useState } from "preact/hooks";
import { FunctionComponent } from "preact/src/index.d.ts";



const LoginForm: FunctionComponent = () => {
    
    const [dni, setDni] = useState<string>("")


    const handlerClick = () => {
        //const expires = new Date(1*24*60*60*1000) 
        const cookie = `dni=${dni}; Path=/;`;
        document.cookie = cookie

        globalThis.location.href = "/characters"
    }

    return (

    <div>
        
        <input onInput={(e)=> setDni(e.currentTarget.value)} type="text" name="dni" placeholder="DNI"/>
        <br/>
        <button type="button" onClick={handlerClick}>Log In</button>
       
    </div>
    
)}

export default LoginForm