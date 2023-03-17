import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Footer.module.css";

const Footer = () => {
	const router = useRouter();
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
						<li
							className={styles.navLinks}
							onClick={() => router.push("/#contact")}
						>
							Contact
						</li>
						<li
							className={styles.navLinks}
							onClick={() => router.push("/#about")}
						>
							About
						</li>
						<li
							className={styles.navLinks}
							onClick={() => router.push("/#services")}
						>
							Services
						</li>
					</ul>
				</span>
				<span className={styles.sect}>
					<h4>Pages</h4>
					<div className={styles.line}></div>
					<ul>
						<li>
							<Link
								className={styles.navLinks}
								href={"/privacy-policy"}
							>
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link
								className={styles.navLinks}
								href={"/terms-condition"}
							>
								Terms & Condition
							</Link>
						</li>
						<li>
							<Link className={styles.navLinks} href={"/faq"}>
								FAQ
							</Link>
						</li>
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
