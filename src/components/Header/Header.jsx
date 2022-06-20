import * as React from "react"
import "./Header.css"

export function Header(props) {
  return (
    <header className="header">
      <h1 className="title">{props.info.title}</h1>
      <h4 className="tagline"></h4>
      <p className="description"></p>
    </header>
  )
}

export default Header
