import React from 'react';
import { Link } from 'react-router-dom';

const UserComp = ({ user }) => {
    const { email, phone, id, name } = user;
    return (
        <div className='py-2 border border-green-700 px-2 rounded-md'>
            <h3 className='font-bold'>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <p><Link to={`/user/${id}`}>User details from UserComponents</Link></p>
        </div>
    );
};

export default UserComp;