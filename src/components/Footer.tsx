import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="resFlex">
				<span className={styles.sect1}>
					<h2 className="logo">KESA</h2>
					<p>
						KESA is a micro banking system. We offer different types
						of financial services to our customers all over the
						world such as Loan, Wire transfer, Long term deposit,
						savings and some other related services.
					</p>
				</span>
				<span className={styles.sect}>
					<h4>Quick Explore</h4>
					<div className={styles.line}></div>
					<ul>
						<li>Contact</li>
						<li>About</li>
						<li>Services</li>
					</ul>
				</span>
				<span className={styles.sect}>
					<h4>Pages</h4>
					<div className={styles.line}></div>
					<ul>
						<li>
							<Link href={"/privacy-policy"}>Privacy Policy</Link>
						</li>
						<li>
							<Link href={"/terms-condition"}>
								Terms & Condition
							</Link>
						</li>
						<li>FAQ</li>
					</ul>
				</span>
			</div>
			<p>
				Copyright © 2022 <strong>KESA</strong> - All Rights Reserved.
			</p>
		</footer>
	);
};

export default Footer;
