import React, {useContext} from 'react'
import s from './index.module.css';
import Select from 'react-select';
import { Context } from '../../context.js';


export default function AddPlayerForm() {
  const { teams, add_player } = useContext(Context);

  const submit = e => {
    e.preventDefault();
    const { player, team } = e.target;
    const new_player = {
      id: Date.now(),
      player: player.value,
      team: team.value,
    }
    add_player(new_player);
    // console.log(new_player)
    e.target.reset();
  }


  return (
    <form className={s.card} onSubmit={submit}>
      <label>
        <p>Please enter a name of player</p>
        <input type='text' name='player' placeholder='Add a name of the team' className={s.add_team_form} />        
      </label>
      <div style={{margin: '10px 0 0'}}>
        <Select 
          options={teams}
          name='team'
        />   
      </div>   
      <button className={s.add_team_btn}>Add</button>

    </form>
  )
}
