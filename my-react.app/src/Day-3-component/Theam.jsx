import {useState} from 'react'
import './style.css'

function Theam() {

const [toggle , setToggle] = useState(true);
const button = toggle ? 'active' : 'inactive'
const  HandleButton = ()=>{
   setToggle(toggle ? false : true)
}

  return (
    <div>
      <button className={button} onClick={HandleButton}> {toggle ? "active" : "inactive"}</button>
    </div>
  )
}

export default Theam
