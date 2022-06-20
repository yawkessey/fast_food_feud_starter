import * as React from "react"
import { appInfo } from "../../App"
import "./Instructions.css"

export function Instructions(props) {
  return (
    <aside className="instructions">
      <p>{props.instruct.instructions.start}</p>
    </aside>
  )
}

export default Instructions
