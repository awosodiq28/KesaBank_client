import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import AuthContext from "@/components/AuthContext";
import DashboardNav from "./DashboardNav";
import styles from "@/styles/Dashboard.module.css";

const UserLayout = ({ children }: any) => {
	// const { user }: any = useContext(AuthContext);
	const [loading, setLoading] = useState(true);
	const [open, setOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		setOpen(window.matchMedia("(min-width: 1050px)").matches);
		checkUserLoggedIn();
	}, []);
	const checkUserLoggedIn = async () => {
		const res = await fetch(
			"https://kesa-bank-backend3.onrender.com/auth/me",
			{
				method: "GET",
				credentials: "include"
			}
		);
		const data = await res.json();
		if (res.ok) {
			console.log({ acc_no: data.fullName });
			if (!data) {
				router.push("/login");
			}
			if (data) setLoading(false);
		} else {
			console.log("failed");
			router.push("/login");
		}
	};

	if (!loading) {
		return (
			<section className={styles.dashboardLayout}>
				<span onClick={() => setOpen(!open)} className={styles.toggle}>
					{open ? "<" : ">"}
				</span>
				<div className={styles.layout}>
					<span className={open ? styles.nav : styles.navClose}>
						<DashboardNav />
					</span>
					{children}
				</div>
			</section>
		);
	} else {
		return <p>Loading...</p>;
	}
};

export default UserLayout;
