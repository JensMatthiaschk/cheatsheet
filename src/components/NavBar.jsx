import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigate = useNavigate()

  const htmlHandler = () => {
    navigate('/html')
  }

  const cssHandler = () => {
    navigate('/css')
  }

  const jsHandler = () => {
    navigate('/javascript')
  }
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          FrontEnd CheatSheet
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-3">
          <li className="px-3" onClick={htmlHandler}>
            <a>HTML</a>
          </li>
          <li className="px-3" onClick={cssHandler}>
            <a>CSS</a>
          </li>
          <li className="px-3" onClick={jsHandler}>
            <a>JavaScript</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
