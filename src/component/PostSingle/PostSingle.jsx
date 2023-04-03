import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostSingle = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const handelGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h3 className='font-bold'>Post ID: {post.id}</h3>
            <h3 className='font-bold'>{post.title}</h3>
            <h3 className='py-3'>{post.body}</h3>
            <button onClick={handelGoBack} className="btn btn-outline btn-primary">Go Back</button>
        </div>
    );
};

export default PostSingle;