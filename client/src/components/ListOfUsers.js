import React from 'react';
import User from './User.js';

const ListOfUsers = props => {

  let users;
  if (props.data.length) {
    users = props.data.map(user =>
      <User
        key={user.id}
        avatar={user.avatar_url}
        name={user.login}
        url={user.html_url}
      />);
  } else {
    return <div>Check your query</div>
  }
  return(
    <ul className='ListOfUsers'>
      { users }
    </ul>
  );
}

export default ListOfUsers;
