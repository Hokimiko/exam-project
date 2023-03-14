import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    
    <div className={styles.footer}>
           <div className={styles.footer_container1}>
            <div className={styles.footer_container2}>
                <div className={styles.footer_container3}>
                <img src="./src/Components/Icon/Logo (1).svg" alt=""/>
                <div className={styles.icon_container}>
                <img src="./src/Components/Icon/Vector (13).svg" alt=""/>
                <img className={styles.icon} src="./src/Components/Icon/Vector (14).svg" alt=""/>
                <img className={styles.icon} src="./src/Components/Icon/Vector (15).svg" alt=""/>
                <img className={styles.icon} src="./src/Components/Icon/Vector (16).svg" alt=""/>
                </div>  
                </div>
                <div className={styles.footer_container4}>
                  <div className={styles.footer_text_blok1}> 
                  <a href="#" className={styles.footer_text1}>Our Destinations</a>
                   <div className={styles.footer_text_blok1_1}>  
                   <h3><a href="#" className={styles.footer_text2}>Canada</a></h3>
                   <h3><a href="#" className={styles.footer_text2}>Alaksa</a></h3>
                   <h3><a href="#" className={styles.footer_text2}>France</a></h3>
                   <h3><a href="#" className={styles.footer_text2}>Iceland</a></h3>
                   </div>
                  </div>

                  <div className={styles.footer_text_blok2}> 
                  <a href="#" className={styles.footer_text1}>Our Activities</a>
                   <div className={styles.footer_text_blok1_1}>  
                   <h3><a href="#" className={styles.footer_text2}>Northern Lights</a></h3>
                   <h3><a href="#" className={styles.footer_text2}>Cruising & sailing</a></h3>
                   <h3><a href="#" className={styles.footer_text2}>Multi-activities</a></h3>
                   <h3><a href="#" className={styles.footer_text2}>Kayaing</a></h3>
                   </div>
                  </div>

                  <div className={styles.footer_text_blok3}> 
                  <a href="#" className={styles.footer_text1}>Travel Blogs</a>
                   <div className={styles.footer_text_blok1_1}>  
                   <h3><a href="#" className={styles.footer_text2}>Bali Travel Guide</a></h3>
                   <h3><a href="#" className={styles.footer_text2}>Sri Lanks Travel Guide</a></h3>
                   <h3><a href="#" className={styles.footer_text2}>Peru Travel Guide</a></h3>
                   <h3><a href="#" className={styles.footer_text2}>Bali Travel Guide</a></h3>
                   </div>
                  </div>

                  <div className={styles.footer_text_blok4}> 
                  <a href="#" className={styles.footer_text1}>About Us</a>
                   <div className={styles.footer_text_blok1_1}>  
                   <h3><a href="#" className={styles.footer_text2}>Our Story</a></h3>
                   <h3><a href="#" className={styles.footer_text2}>Work with us</a></h3>
                   {/* <h3><a href="#" className={styles.footer_text2}>France</a></h3>
                   <h3><a href="#" className={styles.footer_text2}>Iceland</a></h3> */}
                   </div>
                  </div>

                  <div className={styles.footer_text_blok5}> 
                  <a href="#" className={styles.footer_text1}>Contact Us</a>
                   <div className={styles.footer_text_blok1_1}>  
                   <h3><a href="#" className={styles.footer_text2}>Our Story</a></h3>
                   <h3><a href="#" className={styles.footer_text2}>Work with us</a></h3>
                   {/* <h3><a href="#" className={styles.footer_text2}>France</a></h3>
                   <h3><a href="#" className={styles.footer_text2}>Iceland</a></h3> */}
                   </div>
                  </div>
                </div>
                  
                


               
                </div>

            </div>

           
        </div>
    
  )
}

export default Footer