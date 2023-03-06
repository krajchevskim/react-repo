import React from 'react'

const ShowLoggedUsers = ({loggedUsers}) => {
    console.log()
  return (
    !(!loggedUsers.length) && <div style={{margin: '0 auto', width: '350px'}}>
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Password</th>
                    <th>Comment</th>
                    <th>App</th>
                </tr>
            </thead>
            <tbody>
                {
                    loggedUsers.map((singleUser, index) => {
                        let {user, pass, comment, app} = singleUser;
                        return <tr>
                            <td>{user}</td>
                            <td>{pass}</td>
                            <td>{comment}</td>
                            <td>{app}</td>
                        </tr>
                    })
                }
            </tbody>
            <tfoot></tfoot>
        </table>
    </div>
  )
}

export default ShowLoggedUsers;