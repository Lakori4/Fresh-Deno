import { FunctionalComponent } from "preact/src/index.d.ts";
import CharacterCard from "./CharacterCard.tsx";

type Character = {
    name:string,
    image: string,
    id: string,
}


type Props = {
    characters: Character[],
}

const CharacterContainer: FunctionalComponent <Props> = (props) => {
    const characters = props.characters;
    console.log(characters.map(ch => ch.image));
    return (
        <div class ="characterContainer">
            {characters.map((ch) =>  <a href={`/characters/${ch.id}`}> <CharacterCard key={ch.id} character={ch}/></a>)}
        </div>
    )
}

export default CharacterContainer;