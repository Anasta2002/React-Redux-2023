import React from 'react'
import { Link } from 'react-router-dom';
import s from './index.module.css';

export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
      <Link to={'/'} className={s.link}>Main</Link>
      <Link to={'/configuratios_page'} className={s.link}>Configurations</Link>
      <Link to={'/teams_page'} className={s.link}>Teams</Link>
    </div>
  )
}
