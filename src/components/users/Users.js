import React, { useEffect, useContext } from 'react';

import GithubContext from '../../context/github/githubContext';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';


const Users = () => {

    const githubContext = useContext(GithubContext);
    const { loading, users, getAllUsers } = githubContext;

    useEffect(() => {
        if(users.length === 0){getAllUsers();}
        // eslint-disable-next-line
    }, [])
    
    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
