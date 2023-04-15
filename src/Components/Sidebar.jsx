import React,{useState} from 'react'
import {motion} from "framer-motion"
import SidebarMenu from './SidebarMenu'
import { SidebarSmall } from './SidebarSmall'
import styles from "../styles/Sidebar.module.css"
import buddha from "../static/img3.png"
const Sidebar = () => {
    const [isOpen,setIsOpen]=useState(true)
    const toggle=()=>setIsOpen(!isOpen)
  return (
    <div className={styles.maincontainer}>
        {
            isOpen?
            <div  className={styles.sidebar}>
            <SidebarMenu toggle={toggle}/>
          </div>:
          <div style={{width:'3vw'}} className='sidebar'>
                <SidebarSmall toggle={toggle}/>
          </div>
        }
        <div className={styles.rightSide}>
          <img src={buddha} alt="buddha image" className={styles.buddha} />
        </div>
      
    </div>
  )
}

export default Sidebar