import React from 'react';

const User = props => (
  <div>
    <a href={props.url} target="_BLANK">{props.name}</a>
    <span>{props.location}</span>
  </div>
);

export default User;
