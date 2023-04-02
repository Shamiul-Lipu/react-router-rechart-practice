import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UserComp from '../UserComp/UserComp';

const Users = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                data.map(user => <UserComp key={user.id} user={user}></UserComp>)
            }
        </div>
    );
};

export default Users;