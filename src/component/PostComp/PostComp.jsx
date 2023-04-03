import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PostComp = ({ post }) => {
    // console.log(post)
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${post.id}`)
    }
    return (
        <div className='p-3 border-2 border-blue-900 rounded-md'>
            <h3 className='py-2 font-bold'>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`}><button className="btn btn-primary my-2">See Single Post</button></Link>
            <button onClick={handleNavigate} className="btn btn-info mx-1">useNavigate</button>
        </div>
    );
};

export default PostComp;