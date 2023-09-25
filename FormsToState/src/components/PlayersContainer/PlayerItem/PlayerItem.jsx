import React, { useContext } from 'react'
import s from './index.module.css';
import { Context } from '../../../context';

export default function PlayerItem({player, team, id}) {
    const { delete_player } = useContext(Context);

  return (
    <div className={s.item} onClick={() => delete_player(id)}>
        <span>{player}</span>
        <span>{team}</span>
    </div>
  )
}
