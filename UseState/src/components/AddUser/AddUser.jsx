import React from 'react'
import s from './index.module.css'

export default function AddUser({add_new_user_to_state, usersList}) {
    const add_user = e => {
        e.preventDefault();
        const { first_name, last_name, age, avatar } = e.target;
        const new_user = {
            id: Date.now(),
            first_name: first_name.value,
            last_name: last_name.value,
            age: age.value,
            avatar: avatar.value,
        }
        add_new_user_to_state(new_user)
        e.target.reset();
    }

  return (
    <div >
        <form onSubmit={add_user} className={s.add_user_form}>
            <div className={s.inputs}>
                <input type='text' name='first_name' placeholder='Please type name'/>
                <input type='text' name='last_name' placeholder='Please type second name'/>
                <input type='text' name='avatar' placeholder='Please type image url' />
                <input type='number' name='age' placeholder='Please type age'/>
            </div>
            <button>Add new User</button>
        </form>
    </div>
  )
}