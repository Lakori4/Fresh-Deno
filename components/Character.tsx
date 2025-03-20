import { FunctionalComponent } from "preact/src/index.d.ts";

type Props = {
    name: string,
    image: string;
    status: string,
}

const Character: FunctionalComponent<Props> = (props) => {

  console.log(props.name);
  return(
    <div>
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <p><strong>Status:</strong>{props.status}</p>
    </div>
  )
}

export default Character;
