import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css';

export default function NavBar() {
  return (
    <div  className={s.nav_menu}>
      <div className={s.links}>
        <Link to={'/'}  className={s.link}>Main Page</Link>
        <Link to={'/products'}  className={s.link}>Products</Link>
      </div>
    </div>
  )
}
