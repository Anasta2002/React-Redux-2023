import React from 'react'
import s from './index.module.css'

export default function UserItem({first_name, last_name, delete_user, id, avatar, age, increaseOne, decreaseOne, age_zero, random}) {


  return (
    <div className={s.user_card}>
        <img src={avatar} className={s.ava} alt={`${first_name} ${first_name}`}/>
        <p>{first_name} {last_name} </p>
        <p>age: {age}</p>
        <div style={{display: 'flex', gap: '10px', margin: '10px 0'}}>
          <button onClick={() => decreaseOne(id)} className={s.btn}>-</button>
          <button onClick={() => increaseOne(id)} className={s.btn}>+</button>
        </div>
        <div className={s.btns}>
          <button onClick={() => delete_user(id)}>Delete</button>
          <button onClick={() => age_zero(id)}>To reset age</button>
          <button onClick={() => random(id)}>To add random age</button>
        </div>

    </div>
  )
}
