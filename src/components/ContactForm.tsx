import React from "react";
import styles from "../styles/ContactForm.module.css";

const ContactForm = () => {
	return (
		<div className={styles.contactForm} id="contact">
			<h1>Contact Us</h1>
			<div className="line"></div>
			<p>Write us a message</p>
			<form>
				<div className={styles.flex}>
					<input type="text" placeholder="Your Name" />
					<input type="email" placeholder="Your Email" />
				</div>
				<div className={styles.flex}>
					<input type="text" placeholder="Your Phone Number" />
					<input type="text" placeholder="Subject" />
				</div>
				<textarea placeholder="Your Message"></textarea>
				<button type="submit">SEND MESSAGE</button>
			</form>
		</div>
	);
};

export default ContactForm;
