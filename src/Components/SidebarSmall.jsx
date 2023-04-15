import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import styles from '../styles/SidebarMenu.module.css'
export const SidebarSmall = ({toggle}) => {
  return (
    <div>
       <div className={styles.iconCover2} onClick={()=>toggle()}>
            <AiOutlineMenu size={25} className={styles.shape2} color='rgb(155, 74, 7)'/>
        </div>
    </div>
  )
}
