import React from 'react'
import styles from './BookForm.module.css'
export default function BookForm() {
    return (
        <div className={styles.content}>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div className={styles.cont}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <label>Date</label>
                            <input className={`${styles.input_size} ${styles.pad} ${styles.cal}`} type="date" />
                        </div>
                        <div className={styles.col}>
                            <label>Time</label>
                            <select className={`${styles.input_size} ${styles.pad} ${styles.drop}`}>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="10:30 AM">10:30 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="11:30 AM">11:30 AM</option>
                                <option value="11:30 AM">12:00 PM</option>
                                <option value="11:30 AM">12:30 PM</option>
                                <option value="11:30 AM">01:00 PM</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.col}>
                            <label>Name</label>
                            <input className={`${styles.input_size} ${styles.pad}`} type="text" placeholder="Enter your name" />
                        </div>
                        <div className={styles.col}>
                            <label>Phone</label>
                            <input className={`${styles.input_size} ${styles.abc}
                                ${styles.pad}`} type="number" placeholder="x-xxx-xxx-xxxx" />
                        </div>
                    </div>

                    <div className={styles.col}>
                        <label>Total Person</label>
                        <select className={`${styles.input2_size} ${styles.person} ${styles.pad}`}>
                            <option value="1 Person">1 Person</option>
                            <option value="2 Persons">2 Persons</option>
                            <option value="3 Persons">3 Persons</option>
                            <option value="4 Persons">4 Persons</option>
                            <option value="4 Persons">5 Persons</option>
                            <option value="4 Persons">6 Persons</option>
                        </select>
                    </div>
                    <button className={`${styles.input2_size} ${styles.book}`}>Book A Table</button>
                </div>
            </form>
        </div>
    )
}
