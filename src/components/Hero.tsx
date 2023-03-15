import React from "react";
import styles from "../styles/Hero.module.css";
import { useRouter } from "next/router";

const Hero = () => {
	const router = useRouter();
	return (
		<section className={styles.Hero} id="home">
			<div className={styles.texts}>
				<h2 className={styles.h2Hero}>
					Smart way to keep your money safe and secure
				</h2>
				<p>
					Transfer money within minutes and save money for your
					future. All of your desired service in single platform.
				</p>
				<button
					className="btnIcon"
					onClick={() => router.push("/dashboard")}
				>
					GET Started
					<span className="">
						<span className="grey">|</span>
					</span>{" "}
					<span>&#62;</span>
				</button>
			</div>
		</section>
	);
};

export default Hero;
