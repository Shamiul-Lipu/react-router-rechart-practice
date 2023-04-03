import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostComp from '../PostComp/PostComp';

const Posts = () => {
    const posts = useLoaderData()
    // console.log(posts)
    return (
        <div className='grid grid-cols-3 gap-2'>
            {
                posts.map(post => <PostComp key={post.id} post={post}></PostComp>)
            }
        </div>
    );
};

export default Posts;