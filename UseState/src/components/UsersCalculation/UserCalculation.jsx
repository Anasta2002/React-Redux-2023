import React from 'react'
import s from './index.module.css'

export default function UserCalculation({usersList}) {
  const ageAge = usersList.reduce((acc, {age}) => acc + +age, 0)
  const min = usersList => usersList.reduce((acc, age) => Math.min(acc, age));
  const max = usersList => usersList.reduce((acc, age) => Math.max(acc, age));


  return (
    <div className={s.container}>
        <div>Total numbers of users is <b>{usersList.length}</b></div>
        <div>Average age is <b>{Math.round(ageAge / usersList.length)}</b></div>
        <div>Min age is <b>{min(usersList)}</b></div>
        <div>Max age is <b>{max(usersList)}</b></div>
    </div>
  )
}
