import React, {useState, useEffect} from 'react'
import { useQuery, gql } from '@apollo/client'
import { GET_ALL_POSTS } from '../GraphQL/Queries'

function GetAllPosts() {
    const { error, loading, data } = useQuery(GET_ALL_POSTS)
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        if(data) {
            setPosts(data.getAllPosts);
            console.log(data);
        }
    }, [data]);
    return (
        <div className="GetAllPosts">
            {posts.map((val) => {
                return <p> <span>{val.id}</span> <span>{val.title}</span> <span>{val.description}</span></p>
            })}
        </div>
    )
}

export default GetAllPosts