// Write your Character component here
import React from 'react'


const Character = props => {


    return(
        <div>
            <h1>{props.character.name}</h1>;
            <img src={props.character.image} alt="Character Image" />
            <p>Species: {props.character.species}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Status: {props.character.status}</p>
        </div>
    )
};

export default Character;