import React, { useState } from 'react'
import styles from './BookingAddCard.module.css'
import AddBankCard from '../../BankCard/AddBankCard/AddBankCard'
import Backdrop from '../../../UI/Backdrop/Backdrop';
import AddCardModal from '../../../Modals/AddCardModal/AddCardModal';

const BookingAddCard = () => {
    const [modalActive, setModalActive] = useState(true);
  return (
    <div className={styles.container}>
        <div className={styles.bank_card}>
            <img src="./public/icons/Visa.svg" alt="" />
            <div className={styles.card_data}>
                <p className={styles.card_number}>**** 4321</p>
                <p className={styles.card_date}>02/27</p>
            </div>
        </div>
        
        <AddBankCard click={() => setModalActive(true)}/>
        <Backdrop active={modalActive} setActive={setModalActive}><AddCardModal/></Backdrop>
    </div>
  )
}

export default BookingAddCard;