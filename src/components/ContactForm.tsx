import React from 'react';
import styles from '@/styles/ContactForm.module.css';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const ContactForm = () => {
  return (
    <section className={styles.contactForm} id='contact'>
      <h1>Contact Us</h1>
      <div className='line'></div>
      <div className={styles.boxCon}>
        <div className={styles.box}>
          <span className={styles.icon}>
            <RiCustomerService2Fill />
          </span>
          <h4>Call Us</h4>
          <p></p>
        </div>
        <div className={styles.box}>
          <span className={styles.icon}>
            <MdEmail />
          </span>
          <h4>Email Us</h4>

          <a href='mailto:kesabank@accountant.com'>
            {/* <p>kesabank@accountant.com</p> */}
          </a>
        </div>
        <div className={styles.box}>
          <span className={styles.icon}>
            <MdLocationOn />
          </span>
          <h4>Location</h4>
        </div>
      </div>
      <p>Write us a message</p>
      <form>
        <div className={styles.flex}>
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Your Email' />
        </div>
        <div className={styles.flex}>
          <input type='text' placeholder='Your Phone Number' />
          <input type='text' placeholder='Subject' />
        </div>
        <textarea placeholder='Your Message'></textarea>
        <button type='submit'>SEND MESSAGE</button>
      </form>
    </section>
  );
};

export default ContactForm;
