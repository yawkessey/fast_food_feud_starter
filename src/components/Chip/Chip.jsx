import { useState } from "react";
import * as eact from "react"
import { getUniqueCategories } from "../../data/dataset"
import "./Chip.css"
import App from "../../App";


export function Chip({ label = "", isActive = false, onClick }) {
  let buttonClassName;

  //const [category, setCategory] = useState("")

 if(isActive) {
  buttonClassName = "chip active"
 } else {
  buttonClassName = "chip"
 }
 
  return (
    <button className = {buttonClassName} onClick={onClick}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
