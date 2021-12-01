/*import { useQuery } from '@apollo/client';
import React, {useState, useEffect } from 'react'
import { ROLL_TREASURE } from "../GraphQL/Queries";

function getTreasure() {
    const [challenge, setChallenge] = useState("");
    const [type, setType] = useState("");
    const [roll, setRoll] = useState("");
    const [treasure, setTreasure] = useState([]);

    console.log(ROLL_TREASURE);
    const { error, loading, data } = useQuery(ROLL_TREASURE)
        useEffect(() => {
            if(data) {
                setTreasure(data.rollTreasure);
                console.log(data);
            }
        }, [data]);
};

function TreasureForm() {
    const [challenge, setChallenge] = useState("");
    const [type, setType] = useState("");
    const [roll, setRoll] = useState("");
    const [treasure, setTreasure] = useState([]);

    console.log(ROLL_TREASURE);
    const { error, loading, data } = useQuery(ROLL_TREASURE)
        useEffect(() => {
            if(data) {
                setTreasure(data.rollTreasure);
                console.log(data);
            }
        }, [data]);
    /*
    const { loading, error, rollTreasure } = useQuery(ROLL_TREASURE);

    const getTreasure = () => {

        rollTreasure({
            variables: {
                challenge: challenge,
                type: type,
                roll: roll,
            },
        });
        if (error) {
            console.log(error);
        }
    };
    */
        /*

    const rollButton = () => {
        const max = Math.floor(101);
        const min = Math.ceil(0);
        const randomNumber =  Math.floor(Math.random() * (max - min) + min); 
        setRoll(randomNumber);
        console.log(roll);
    };

    return (
        <div className="TreasureForm">
            
            <input
                type="text"
                placeholder="Challenge"
                onChange={(e) => {
                    setChallenge(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Type"
                onChange={(e) => {
                    setType(e.target.value);
                }}
            />
            <input
                type="number"
                placeholder="Roll"
                onChange={(e) => {
                    setRoll(e.target.value);
                    console.log(roll);
                }}
            />
            <button onClick={rollButton}>Roll</button>
            <button onClick={getTreasure}>Get Treasure</button>
            
            <div className="DisplayTreasure">
                {treasure.map((val) => {
                    return <p> <span>{val.id}</span> <span>{val.type}</span> <span>{val.challenge}</span></p>
                })}
            </div>

        </div>
    )
}

export default TreasureForm;
*/