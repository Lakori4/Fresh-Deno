import { FunctionalComponent } from "preact/src/index.d.ts";

type Props = {
    character: {
    name: string,
    image: string
    };
};



export const CharacterCard: FunctionalComponent<Props> = (props) => {
    const character = props.character;

    return (
        <div class="characterCard">
            <img src={character.image} alt={character.name}/>
            <div>{character.name}</div>
        </div>
    )
}

export default CharacterCard;