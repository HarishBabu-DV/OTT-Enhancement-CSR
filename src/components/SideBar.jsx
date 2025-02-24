import React from 'react'
import { Link } from 'react-router'

const SideBar = () => {
  return (
    <aside>
        <div>
            <Link to={"/"}>Dashboard</Link>
            <Link to={"/"}>Users</Link>
            <Link to={"/"}>Movies</Link>
            <Link to={"/"}>Dashboard</Link>
            <Link to={"/"}>Dashboard</Link>
        </div>
    </aside>
  )
}

export default SideBar