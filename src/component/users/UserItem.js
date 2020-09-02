import React from 'react'

function UserItem(props) {
    const {login,avatar_url,html_url} = props.userItem;
    return (
        <div className="col-md-4 margin-bottom">
            <div className="card text-center shadow">
                <div className="card-body">
                    <center className="margin-bottom"><img src={avatar_url} alt="" className="round-img" style={{width:'60px'}}/></center>
                        <h3 className="margin-bottom">{login}</h3>
                    <button className="btn btn-sm btn-info"><a href={html_url} target="blank">More</a></button>
                </div>
            </div>
        </div>
    )
}

export default UserItem
