import Link from "next/link";
import React, { useContext } from "react";
import styles from "../../styles/Dashboard.module.css";
import AuthContext from "../AuthContext";

const Dashboard = () => {
	const { user }: any = useContext(AuthContext);
	// const { account_no, account_bal } = user;

	return (
		<div className={styles.details}>
			<div className={styles.con}>
				<p>Account Number</p>
				<p>{user?.account_no}</p>
			</div>
			<div className={styles.con}>
				<p>Account Balance</p>
				<p>
					{user?.currency}
					{user?.account_bal}
				</p>
			</div>
			<div className={styles.resFlex}>
				<div>
					<div className={styles.flex}>
						<p>Active Users</p>{" "}
						<Link href={""}>
							<p style={{ whiteSpace: "nowrap" }}>&#8594; View</p>
						</Link>
					</div>
					<p>$0</p>
				</div>
				<div>
					<div className={styles.flex}>
						<p>Pending KYC</p>{" "}
						<Link href={""}>
							<p style={{ whiteSpace: "nowrap" }}>&#8594; View</p>
						</Link>
					</div>
					<p>$0</p>
				</div>
				<div>
					<div className={styles.flex}>
						<p>Pending Tickets</p>{" "}
						<Link href={""}>
							<p style={{ whiteSpace: "nowrap" }}>&#8594; View</p>
						</Link>
					</div>
					<p>$0</p>
				</div>
				<div>
					<div className={styles.flex}>
						<p>Deposit Requests</p>{" "}
						<Link href={""}>
							<p style={{ whiteSpace: "nowrap" }}>&#8594; View</p>
						</Link>
					</div>
					<p>$0</p>
				</div>
			</div>
			<div className={styles.resFlex}>
				<div>
					<div className={styles.flex}>
						<p>Withdrawal Requests</p>{" "}
						<Link href={""}>
							<p style={{ whiteSpace: "nowrap" }}>&#8594; View</p>
						</Link>
					</div>
					<p>$0</p>
				</div>
				<div>
					<div className={styles.flex}>
						<p>FDR Requests</p>{" "}
						<Link href={""}>
							<p style={{ whiteSpace: "nowrap" }}>&#8594; View</p>
						</Link>
					</div>
					<p>$0</p>
				</div>
				<div>
					<div className={styles.flex}>
						<p>Wire Transfer Requests</p>{" "}
						<Link href={""}>
							<p style={{ whiteSpace: "nowrap" }}>&#8594; View</p>
						</Link>
					</div>
					<p>$0</p>
				</div>
			</div>
			<div className={`${styles["con"]} ${styles["over"]}`}>
				<p>Recent Transactions</p>
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>User</th>
							<th>Currency</th>
							<th>Amount</th>
							<th>Charge</th>
							<th>Grand Total</th>
							<th>DR/CR</th>
							<th>Type</th>
							<th>Method</th>
							<th>Status</th>
						</tr>
						<tr>
							<td colSpan={5}>No Active Loan Available</td>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	);
};

export default Dashboard;
