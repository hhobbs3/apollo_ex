import { useMutation } from '@apollo/client';
import React, {useState} from 'react'
import { CREATE_POST_MUTATION } from "../GraphQL/Mutations";

function PostForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [createPost, { error }] = useMutation(CREATE_POST_MUTATION);

    const addPost = () => {
        createPost({
            variables: {
                title: title,
                description: description,
            },
        });
        
        if (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Title"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Description"
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            <button onClick={addPost}> Create Post</button>
        </div>
    )
}

export default PostForm
