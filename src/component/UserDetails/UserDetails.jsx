import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user)
    return (
        <div>
            <h1>Specific Users Details</h1>
            <h3 className='font-bold pt-3'>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    );
};

export default UserDetails;