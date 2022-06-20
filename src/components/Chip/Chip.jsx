import * as eact from "react"
import { getUniqueCategories } from "../../data/dataset"
import "./Chip.css"

export function Chip({ label = "", isActive = false }) {
  let buttonClassName;
  
 if(isActive) 
 {
  buttonClassName = "chip active"
 } else 
 {
  buttonClassName = "chip"
 }

 
  return (
    <button className = {buttonClassName}>
      <p className="label">{label}{isActive}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
