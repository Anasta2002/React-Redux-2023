import React, { useContext } from 'react';
import { Context } from '../../context.js';

import s from './index.module.css';

export default function AddTeamForm() {

  const { add_team } = useContext(Context);

  const submit = e => {
    e.preventDefault();
    const { team } = e.target;
    const new_team = {
      value: team.value,
      label: team.value,
    }
    add_team(new_team);
    e.target.reset();
  }

  return (
    <form className={s.card} onSubmit={submit} >
      <label>
        <p>Please type a name of team</p>
        <input type='text' name='team' placeholder='Add a name of the team' className={s.add_team_form} />        
      </label>
      <button className={s.add_team_btn}>Add</button>
    </form>
  )
}
