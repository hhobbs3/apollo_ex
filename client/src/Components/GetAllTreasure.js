import React, {useState, useEffect} from 'react'
import { useQuery, gql } from '@apollo/client'
import { GET_ALL_TREASURE } from  '../GraphQL/Queries'

function GetAllTreasure() {
    const { error, loading, data } = useQuery(GET_ALL_TREASURE)
    const [treasure, setTreasure] = useState([]);
    useEffect(() => {
        if(data) {
            setTreasure(data.getAllTreasure);
            console.log(data);
        }
    }, [data]);
    return (
        <div className="GetAllTreasure">
            <table>
                <tr>
                    <th>Challenge</th>
                    <th>Type</th>
                    <th>Coin</th>
                    <th>Item</th>
                    <th>Magic Item Table</th>
                    <th>Probability</th>
                </tr>
                {treasure.map((val) => {
                    return (
                    <tr>
                        <td>{val.challenge}</td>
                        <td>{val.type}</td>
                        {val.coin.type ? <td>{val.coin.diceNumber}d{val.coin.diceSize} {val.coin.type}</td> : <td></td>}
                        {val.item.type ? <td>{val.item.diceNumber}d{val.item.diceSize} {val.item.value} {val.item.type}</td> : <td></td> }
                        {val.magicItemTable.type ? <td>{val.magicItemTable.diceNumber}d{val.magicItemTable.diceSize} items from table {val.magicItemTable.type}</td> : <td></td> }
                        <td>{val.lowProbability} - {val.highProbability}</td>
                    </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default GetAllTreasure