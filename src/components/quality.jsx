import React from 'react';

const Quality = ({user,index}) => {
  return <span key={index} className={`m-2 badge bg-${user.qualities.color}`}>{user.qualities.name}</span>
}

export default Quality;
