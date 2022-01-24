import React,{useState,useEffect} from "react";

import api from '../api';
import SearchStatus from './searchStatus';
import User from './user';
import Pagination from "./pagination";

const Users = () => {
  const[users,setUsers] = useState([]);
  const[paginationNumber,setPaginationNumber] = useState(1);

//fetch init
  useEffect(()=>{
    setUsers(api.users.fetchAll())
  },[])


const  handleDeleteUser = (id) =>{
  setUsers(users.filter(user=>user._id !== id))
};

  const sortUsers = (user) => {

      if( paginationNumber === 1) {
         return users.slice(0,4);
      }

      if( paginationNumber === 2) {
        return   users.slice(4,8);
      }
      if( paginationNumber === 3) {

       return  users.slice(8)
      }

    return user;
  }
  return ( <>

    <SearchStatus length = {users.length}/>
  <table class="table">

  <thead>
    <tr>
      <th scope="col">Имя</th>
      <th scope="col">качества</th>
      <th scope="col">Професия</th>
      <th scope="col">Встретился\раз</th>
      <th scope="col">Оценка</th>
      <th scope="col">Избранное</th>
      <th scope="col"></th>
    </tr>
  </thead>

  <tbody>
    {sortUsers(users).map((user,index)=>{
      return   <User user={user} index = {index} handleDeleteUser={handleDeleteUser}/>
    })}

  </tbody>
</table>

    <Pagination setPaginationNumber={setPaginationNumber}/>

  </>)
}

export default Users;

