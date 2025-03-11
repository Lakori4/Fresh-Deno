import {FunctionalComponent } from "preact/src/index.d.ts";


type Props = {
    character: {
    name: string,
    status: string,
    type: string,
    gender: string,
    origin: string,
    image: string,
    episodes: Array <{ id: string, name:string}>
    };
};



export const Character: FunctionalComponent<Props>  = (props) => {

    const character = props.character;

    return (
        <div class="characterContainer">
            
            <h1>{character.name}</h1>


            <div class = "characterCard">
            
                <img src={character.image} alt="" />

                <div>
                    <div><strong>Name:</strong> {character.name} </div>
                
                    <div><strong>Status: </strong> {character.status} </div>
                
                    <div><strong>Type: </strong>{character.type} </div>
                
                    <div><strong>Origin: </strong>{character.origin} </div>
                
                    <div><strong>Gender: </strong>{character.gender} </div>
                            
                </div>
            </div>

            <div>
                <h2>Episodios</h2>
                {character.episodes.map((ep) => (
                  <div key={ep.id}>Ep. {ep.id}: {ep.name}</div>
                ))}

            </div> 
        </div>
    );
};

export default Character;