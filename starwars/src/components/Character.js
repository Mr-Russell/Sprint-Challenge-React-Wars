// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Display =styled.div`
    width: 500px;
    display: flex;
    flex-direction:column;
    align-items: center;
    border: 5px solid yellow;
    background-color: lightgray;
    margin: 50px 0;

    h2{
        color: cyan;
        text-shadow: 0px 0px 5px black;
        font-size: 2rem;
    }

    .text{
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: darkgray;
        border: 2px solid navy;
        margin: 15px;
        padding: 5px 10px;

        p {

            color: chartreuse;

            span{
                font-weight: bold;
                color: mediumspringgreen;
                border-bottom: 2px solid black;
                text-shadow: 0px 0px 2px black;
            }
        }
    }
`

const Character = props => {


    return(
        <Display>
            <h2>{props.character.name}</h2>
            <img src={props.character.image} alt="Character Image" />
            <div className="text">
                <p><span>Species:</span> {props.character.species}</p>
                <p><span>Gender:</span> {props.character.gender}</p>
                <p><span>Status:</span> {props.character.status}</p>
            </div>
        </Display>
    )
};

export default Character;