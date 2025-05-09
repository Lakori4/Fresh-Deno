import { FunctionalComponent } from "preact/src/index.d.ts";

type Props = {
    name: string,
    image: string;
    id: string,
}

const CharacterThumbnail: FunctionalComponent<Props> = (props) => {

  //console.log(props.name);
  return(
    <div class="characterThumbnail">
      <a href={`./characters/${props.id}`}><img src={props.image} alt={props.name}/> </a>
      <h2>{props.name}</h2>
    </div>
  )
}

export default CharacterThumbnail;
