import React, { useState } from 'react';
import {users} from './users.js';
import UserItem from './UserItem/UserItem.jsx';
import s from './index.module.css'
import AddUser from '../AddUser/AddUser.jsx';
import UserCalculation from '../UsersCalculation/UserCalculation.jsx';

export default function UsersContainer() {

  const [usersList, setUsersList] = useState(users)
  const delete_user = (id) => {
    setUsersList(usersList.filter(el => el.id !== id))
  }

  const increaseOne = (incrID) => {
    const target = usersList.find(({id}) => id === incrID);
    target.age++;
    setUsersList([...usersList])
  }
  const decreaseOne = (incrID) => {
    const target = usersList.find(({id}) => id === incrID);
    target.age && target.age--
    setUsersList([...usersList])
  }

  const age_zero = (incrID) => {
    const target = usersList.find(({id}) => id === incrID);
    target.age = 0
    setUsersList([...usersList])
  }

  const add_new_user_to_state = (obj) => {
    setUsersList([...usersList, obj])
  }

  const random = userID => {
    const target = usersList.find(({id}) => id === userID);
    target.age = Math.floor(Math.random() * 38 + 2);
    setUsersList([...usersList])
  }

  return (
    <div>
      <AddUser usersList={usersList} setUsersList={setUsersList} add_new_user_to_state={add_new_user_to_state} />
      <div className={s.container}>
          {
              usersList.map(el => 
                  <UserItem 
                      key={el.id} 
                      {...el} 
                      delete_user={delete_user} 
                      increaseOne={increaseOne} 
                      decreaseOne={decreaseOne} 
                      age_zero={age_zero} 
                      random={random}
                  />)
          }
      </div>
      <UserCalculation usersList={usersList} />
    </div>
  )
}