import React, {useContext} from 'react'
import { Context } from '../../context.js'
import PlayerItem from './PlayerItem/PlayerItem.jsx';

export default function PlayersContainer() {
  const { players } = useContext(Context);

  return (
    <div>
      {players.map((player => 
        <PlayerItem key={player.id} {...player} />
      ))}
    </div>
  )
}