import React from 'react'
import styles from './Commentaries.module.css'
import Button from '../UI/Button/Button'

function Commentaries() {
  return (
    <div className={styles.container}>
        <div className={styles.container1}>
            <div className={styles.title_btn}>
                <h2 className={styles.title}>Reviews</h2>
                <Button text="Give your review"/>
            </div>
            <div className={styles.grade_container}>
                <div className={styles.grade}>4.2</div>
                <div className={styles.grade_text}>
                    <h4 className={styles.text1}>Very good</h4>
                    <h5 className={styles.text2}>371 verified reviews</h5>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.comments_container}>
                <div className={styles.img_container}>
                    <img src="./public/icons/Ellipse 1.png" alt="" />
                </div>
                
            <div className={styles.Commentaries}>
                <div className={styles.text_container}>
                    <div className={styles.text__amazing}>
                    <p className={styles.amazing}>
                    5.0 Amazing
                    </p>

                    <p className={styles.name}>
                    Omar Siphron
                    </p>
                    </div>
                </div>
                <div>
                <p className={styles.comment}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
                <div className={styles.icon_congtainer}>
                    <img className={styles.icon} src="./public/icons/flag.svg" alt="" />
                </div>
            </div>
            
            <div className={styles.line}></div>

            <div className={styles.comments_container}>
                <div className={styles.img_container}>
                    <img src="./public/icons/Ellipse 2.png" alt="" /></div>
                
            <div className={styles.Commentaries}>
                <div className={styles.text_container}>
                    <div className={styles.text__amazing}>
                    <p className={styles.amazing}>
                    5.0 Amazing
                    </p>

                    <p className={styles.name}>
                    Omar Siphron
                    </p>
                    </div>
                </div>
                <div>
                <p className={styles.comment}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
                <div className={styles.icon_congtainer}>
                    <img className={styles.icon} src="./public/icons/flag.svg" alt="" />
                </div>
            </div>
            
            <div className={styles.line}></div>

            <div className={styles.comments_container}>
                <div className={styles.img_container}>
                    <img src="./public/icons/Ellipse 3.png" alt="" /></div>
                
            <div className={styles.Commentaries}>
                <div className={styles.text_container}>
                    <div className={styles.text__amazing}>
                    <p className={styles.amazing}>
                    5.0 Amazing
                    </p>

                    <p className={styles.name}>
                    Omar Siphron
                    </p>
                    </div>
                </div>
                <div>
                <p className={styles.comment}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
                <div className={styles.icon_congtainer}>
                    <img className={styles.icon} src="./public/icons/flag.svg" alt="" />
                </div>
            </div>
            
            <div className={styles.line}></div>

            <div className={styles.comments_container}>
                <div className={styles.img_container}>
                    <img src="./public/icons/Ellipse 1.png" alt="" /></div>
                
            <div className={styles.Commentaries}>
                <div className={styles.text_container}>
                    <div className={styles.text__amazing}>
                    <p className={styles.amazing}>
                    5.0 Amazing
                    </p>

                    <p className={styles.name}>
                    Omar Siphron
                    </p>
                    </div>
                </div>
                <div>
                <p className={styles.comment}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
                <div className={styles.icon_congtainer}>
                    <img className={styles.icon} src="./public/icons/flag.svg" alt="" />
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Commentaries