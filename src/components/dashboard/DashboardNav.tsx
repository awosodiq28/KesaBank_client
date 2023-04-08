import { useContext } from "react";
import styles from "../../styles/DashboardNav.module.css";
import { MdSpaceDashboard, MdSend } from "react-icons/md";
import {
	FaExchangeAlt,
	FaMoneyCheckAlt,
	FaRegCreditCard,
	FaUnlockAlt,
	FaMinusCircle,
	FaPlusCircle
} from "react-icons/fa";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { HiDocumentReport } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import Link from "next/link";
import Dropdown from "./Dropdown";
import AuthContext from "../AuthContext";

const DashboardNav = () => {
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
			<Link href={"/dashboard"} className="m_0">
				<div className={styles.flex}>
					<MdSpaceDashboard />
					<p>Dashboard</p>
				</div>
			</Link>
			<Link href={"/dashboard/verify-page"} className="m_0">
				<div className={styles.flex}>
					<MdSend />
					<p>Send Money</p>
				</div>
			</Link>
			<Link href={"/dashboard/verify-page"} className="m_0">
				<div className={styles.flex}>
					<FaExchangeAlt />
					<p>Exchange Money</p>
				</div>
			</Link>
			<Link href={"/dashboard/verify-page"} className="m_0">
				<div className={styles.flex}>
					<FaMoneyCheckAlt />
					{/* <RiFileTransferFill /> */}
					<p>Wire Transfer</p>
				</div>
			</Link>
			{/* <div
				className={!dropdown ? styles.flex : styles.dropdown}
				onClick={() => setDropdown(!dropdown)}
			>
				<FaRegCreditCard />
				<p>Payment Request</p>
			</div>
			<div className={styles.dropdownContent}>
				<Link href={"#"}>New Request</Link>
				<Link href={"#"}>All Requests</Link>
			</div> */}
			<Dropdown
				top="Payment Request"
				content={{ "New Request": "#", "All Requests": "#" }}
			>
				<FaRegCreditCard />
			</Dropdown>
			<Dropdown
				top="Deposit Money"
				content={{
					"Automatic Deposit": "#",
					"Manual Deposit": "#",
					"Redeem Gift Card": "#"
				}}
			>
				<FaPlusCircle />
			</Dropdown>
			<div className={styles.flex}>
				<FaMinusCircle />
				<p>Withdraw Money</p>
			</div>
			<Dropdown
				top="Loans"
				content={{
					"Apply New Loan": "#",
					"My Loans": "#",
					"Loan Calculator": "#"
				}}
			>
				<RiMoneyDollarBoxFill />
			</Dropdown>
			<Dropdown
				top="Fixed Deposit"
				content={{ "Apply New FRD": "#", "FDR History": "#" }}
			>
				<FaUnlockAlt />
			</Dropdown>
			<Dropdown
				top="Support Tickets"
				content={{
					"Create New Ticket": "#",
					"Pending Tickets": "#",
					"Active Tickets": "#",
					"Closed Tickets": "#"
				}}
			>
				<BiSupport />
			</Dropdown>
			<Link href={"/dashboard"} className="m_0">
				<div className={styles.flex}>
					<HiDocumentReport />
					<p>Transactions Report</p>
				</div>
			</Link>
		</span>
	);
};

export default DashboardNav;
