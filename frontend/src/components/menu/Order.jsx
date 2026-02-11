import React from 'react'
import styles from './Order.module.css'
import uber from '../../assets/menu_ico/order_ico/uber.png'
import grub from '../../assets/menu_ico/order_ico/grub.png'
import post from '../../assets/menu_ico/order_ico/post.png'
import door from '../../assets/menu_ico/order_ico/door.png'
import food from '../../assets/menu_ico/order_ico/food.png'
import deliver from '../../assets/menu_ico/order_ico/deliver.png'
import insta from '../../assets/menu_ico/order_ico/insta.png'
import just from '../../assets/menu_ico/order_ico/just.png'
import didi from '../../assets/menu_ico/order_ico/didi.png'
export default function Order() {
    return (
        <div className={styles.cont}>
            <div className={styles.abc}>
                <div className={styles.head}>
                    <h2>You can order through apps</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
                </div>

                <div className={styles.imcont}>
                    <div className={styles.box}>
                        <div className={`${styles.imc} ${styles.ubox}`}>
                            <img src={uber} alt="uber" className={styles.uber} />
                        </div>
                        <div className={`${styles.imc} ${styles.ubox}`}>
                            <img src={grub} alt="grub" className={styles.grub} />
                        </div>
                        <div className={`${styles.imc} ${styles.ubox}`}>
                            <img src={post} alt="post" className={styles.post} />
                        </div>
                    </div>

                    <div className={styles.box2}>
                        <div className={`${styles.imc} ${styles.dbox}`}>
                            <img src={door} alt="uber" className={styles.door} />
                        </div>
                        <div className={`${styles.imc} ${styles.dbox}`}>
                            <img src={food} alt="grub" className={styles.food} />
                        </div>
                        <div className={`${styles.imc} ${styles.dbox}`}>
                            <img src={deliver} alt="post" className={styles.deliver} />
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={`${styles.imc} ${styles.ibox}`}>
                             <img src={insta} alt="uber" className={styles.insta} />
                        </div>
                        <div className={`${styles.imc} ${styles.ibox}`}>
                            <img src={just} alt="grub" className={styles.just} />
                        </div>
                        <div className={`${styles.imc} ${styles.ibox}`}>
                            <img src={didi} alt="post" className={styles.didi} />
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}
