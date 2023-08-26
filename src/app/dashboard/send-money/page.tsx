'use client';

import { useState } from 'react';
import styles from '@/styles/Dashboard.module.css';
import Modal from '@/components/Modal';
import { bankList } from '@/helpers/banksList';

const SendMoney = () => {
  const [account_no, setAccount_no] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [selectedBank, setSelectedBank] = useState('First Bank');

  const sendMoney = (e: any) => {
    e.preventDefault();
    // setError('The pin you entered is incorrect');
    setOpenModal(true);
  };

  const checkPin = (e: any) => {
    e.preventDefault();
    setError('The pin you entered is incorrect');
  };

  return (
    <div className={styles.details}>
      <div className={`${styles.con} ${styles.over}`}>
        <h6 className='tac'>SEND MONEY</h6>
        <form onSubmit={sendMoney}>
          <label>
            <p>Account Number:</p>
            <input
              required
              type='number'
              value={account_no}
              onChange={(e) => setAccount_no(e.target.value)}
            />
          </label>
          <label>
            <p>Select Bank:</p>
            <select
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}>
              {bankList.map((bankName, index) => (
                <option key={index} value={bankName} style={{ color: 'black' }}>
                  {bankName}
                </option>
              ))}
            </select>
          </label>
          <label>
            <p>Amount:</p>
            <input
              required
              type='number'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          {/* <label>
							<p>Pin:</p>
							<input
								required
								type='number'
								value={pin}
								onChange={(e) => setPin(e.target.value)}
							/>
						</label> */}
          <label>
            <p>Note:</p>
            <textarea
              value={note}
              required
              onChange={(e) => setNote(e.target.value)}></textarea>
          </label>
          <button type='submit' className={styles.btn}>
            Send Money
          </button>
        </form>
      </div>
      <Modal openModal={openModal}>
        <div className={styles.modal_pin}>
          <button className={styles.cancel} onClick={() => setOpenModal(false)}>
            X
          </button>
          <h6 className='tac' style={{ color: 'wheat' }}>
            Enter Your Tax Pin
          </h6>
          <form onSubmit={checkPin}>
            <input
              required
              type='password'
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
                setError('');
              }}
            />
            <button type='submit' className={styles.btn_modal}>
              Submit
            </button>
            {error && <p className={styles.pin_error}>{error}</p>}
          </form>
        </div>
      </Modal>
    </div>
  );
};
export default SendMoney;
