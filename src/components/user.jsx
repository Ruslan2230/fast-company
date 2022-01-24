import React,{useState} from 'react';
import Quality from './quality';
import BookMark from './bookMark';

const User = ({user,index, handleDeleteUser}) => {
  const [ mark,setMark ]  = useState(false);

  return <tr key={index}>
    <th scope="row">{user.name}</th>
    <td> <Quality user={user}  index={index} /></td>
    <td>{user.profession.name}</td>
    <td>{user.completedMeetings}</td>
    <td>{user.rate}</td>
    <td><BookMark user={user} mark={mark} setMark={setMark}/></td>
    <td>
      <button type="button" onClick={() => {
        handleDeleteUser(user._id)
      }} className="btn btn-danger">delete
      </button>
    </td>
  </tr>

}

export default User;
