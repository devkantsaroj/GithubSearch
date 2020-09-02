import React from 'react'
import UserItem from './UserItem';

function Users(props) {
    const users = props.users;
    let output = users.map(m =><UserItem key={m.id} userItem={m}/>);
    return (
        <div className="card-body row">
            {output}
        </div>
    );
}

export default Users
