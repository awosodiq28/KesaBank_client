import styles from "../../styles/DashboardNav.module.css";
import { useContext, useState } from "react";
import { MdSpaceDashboard, MdRequestQuote } from "react-icons/md";
import {
	FaMoneyCheckAlt,
	FaUsers,
	FaUnlockAlt,
	FaMinusCircle,
	FaPlusCircle
} from "react-icons/fa";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { HiDocumentReport } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { BsGiftFill } from "react-icons/bs";
import Link from "next/link";
import Dropdown from "../dashboard/Dropdown";
import AuthContext from "../AuthContext";

const AdminDashboardNav = () => {
	const { user }: any = useContext(AuthContext);
	return (
		<span className={styles.DashboardNav}>
			<div>
				<div></div>
				<div>
					<h6 className="tac">{user?.fullName}</h6>
				</div>
			</div>
			<div className={styles.flex}>
				<p>NAVIGATIONS</p>
			</div>
			<Link href={"/admin/dashboard"} className="m_0">
				<div className={styles.flex}>
					<MdSpaceDashboard />
					<p>Dashboard</p>
				</div>
			</Link>
			<Dropdown
				top="Users"
				content={{
					"Add New": "/admin/users/create",
					"All Users": "/admin/users",
					"KYC Documents": "/admin/users/kyc",
					"Verified Users": "#",
					"Unverified Users": "#"
				}}
			>
				<FaUsers />
			</Dropdown>
			<div className={styles.flex}>
				<MdRequestQuote />
				<p>Transfer Requests</p>
			</div>
			<div className={styles.flex}>
				<FaMoneyCheckAlt />
				<p>Wire Transfer</p>
			</div>
			<Dropdown
				top="Deposit"
				content={{
					"Deposit Request": "#",
					"Make Deposit": "/admin/users/update-bal",
					"Deposit History": "#"
				}}
			>
				<FaPlusCircle />
			</Dropdown>
			<Dropdown
				top="Withdraw"
				content={{
					"Withdraw Request": "#",
					"Make Withdraw": "/admin/users/update-bal",
					"Withdraw History": "#"
				}}
			>
				<FaMinusCircle />
			</Dropdown>
			<Dropdown
				top="Loans Management"
				content={{
					"All Loans": "#",
					"Loan Calculator": "#",
					"Add New Loan": "#",
					"Loan Products": "#",
					"Loan Repayments": "#"
				}}
			>
				<RiMoneyDollarBoxFill />
			</Dropdown>
			<Dropdown
				top="Fixed Deposit"
				content={{
					"All New": "#",
					"All FDR": "#",
					"FDR Packages": "#"
				}}
			>
				<FaUnlockAlt />
			</Dropdown>
			<Dropdown
				top="Gift Cards"
				content={{ "Gift Cards": "#", "Used Gift Cards": "#" }}
			>
				<BsGiftFill />
			</Dropdown>
			<Dropdown
				top="Support Tickets"
				content={{
					"Active Tickets": "#",
					"Pending Tickets": "#",
					"Closed Tickets": "#"
				}}
			>
				<BiSupport />
			</Dropdown>
			<div className={styles.flex}>
				<HiDocumentReport />
				<p>All Transactions</p>
			</div>
		</span>
	);
};

export default AdminDashboardNav;
