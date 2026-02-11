import React, {useState} from 'react'
import styles from "./MenuBar.module.css"

export default function MenuBar() {
  const [activeButton, setActiveButton] = useState(0);
  return (
     <ul className={styles.list}>
      <button className={activeButton===0?`${styles.act}`:`${styles.btn}`} onClick={()=>setActiveButton(0)}>All</button>
      <button className={activeButton===1?`${styles.act}`:`${styles.btn}`} onClick={()=>setActiveButton(1)}>Breakfast</button>
      <button className={activeButton===2?`${styles.act}`:`${styles.btn}`} onClick={()=>setActiveButton(2)}>Main Dishes</button>
      <button className={activeButton===3?`${styles.act}`:`${styles.btn}`} onClick={()=>setActiveButton(3)}>Drinks</button>
      <button className={activeButton===4?`${styles.act}`:`${styles.btn}`} onClick={()=>setActiveButton(4)}>Desserts</button>
    </ul> 
  )
}