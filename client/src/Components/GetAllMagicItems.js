import React, {useState, useEffect} from 'react'
import { useQuery, gql } from '@apollo/client'
import { GET_ALL_MAGIC_ITEMS } from  '../GraphQL/Queries'

function GetAllMagicItems() {
    const { error, loading, data } = useQuery(GET_ALL_MAGIC_ITEMS)
    const [magicItems, setMagicItems] = useState([]);
    useEffect(() => {
        if(data) {
            setMagicItems(data.getAllMagicItems);
            console.log(data);
        }
    }, [data]);
    return (
        <div className="GetAllMagicItems">
            <table>
                <tr>
                    <th>Table</th>
                    <th>Item</th>
                    <th>Probability</th>
                </tr>
                {magicItems.map((val) => {
                    return (
                    <tr>
                        <td>{val.table}</td>
                        <td>{val.item}</td>
                        <td>{val.lowProbability} - {val.highProbability}</td>
                    </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default GetAllMagicItems