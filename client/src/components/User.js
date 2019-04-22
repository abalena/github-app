import React from 'react';

const User = props => (
  <div className='User'>
    <img src={props.avatar} />
    <div>
      <a href={props.url} target="_BLANK">{props.name}</a>
    </div>
  </div>
);

export default User;
