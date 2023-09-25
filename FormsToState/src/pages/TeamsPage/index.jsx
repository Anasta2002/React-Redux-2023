import React, {useContext} from 'react'
import { Context } from '../../context.js'
import PlayersContainer from '../../components/PlayersContainer/PlayersContainer';
import s from './index.module.css';
import Nothing from '../../components/PlayersContainer/Nothing/Nothing.jsx';

export default function TeamsPage() {
  const { players } = useContext(Context);
  return (
    <div>
      {players.length > 0 ? 
        <div className={s.title}>Participants and their teams:
          <PlayersContainer />
        </div> : 
        <Nothing />
      }
    </div>

  )
}
