import Image from "next/image";
import React from "react";
import styles from "../styles/About.module.css";
import { useRouter } from "next/router";

const About = () => {
	const router = useRouter();

	return (
		<section id="about">
			<div className={styles.aboutFlex}>
				<div className={styles.aboutImgCon}>
					<Image
						className={styles.aboutImg}
						src={"/about-us.jpg"}
						alt="about us"
						// width={450}
						// height={300}
						fill
					/>
				</div>
				<div className={styles.about}>
					<h2>About Us</h2>
					<p>
						KESA is a micro banking system. We offer different types
						of financial services to our customers all over the
						world. We have multiple branches to provide different
						services such as Loan, Wire transfer, Long term deposit,
						savings and some other related services.
					</p>
					<button
						className="btnIcon"
						onClick={() => router.push("/#services")}
					>
						SERVICES <span className="grey">|</span>
						<span>&#62;</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default About;
