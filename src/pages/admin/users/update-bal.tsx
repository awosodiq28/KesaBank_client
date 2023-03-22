import AdminLayout from "@/components/admin/AdminLayout";
import React, { useState, useContext } from "react";
import styles from "@/styles/Dashboard.module.css";
import AuthContext from "@/components/AuthContext";

const UpdateBal = () => {
	const [error, setError] = useState(null) as any;
	const [amount, setAmount] = useState("");
	const [account_no, setAccount_no] = useState("");
	const [currency, setCurrency] = useState("$");
	const [loading, setLoading] = useState(false);

	const { getAllUsers, users }: any = useContext(AuthContext);

	const updateBal = async (e: any) => {
		e.preventDefault();
		setLoading(true);
		if (navigator && navigator.onLine) {
			const res = await fetch(
				"https://kesa-bank-backend3.onrender.com/admin/update-bal",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						account_no,
						amount,
						currency
					})
				}
			);

			const data = await res.json();
			if (res.ok) {
				getAllUsers();
				setLoading(false);

				console.log(data);
			} else {
				setLoading(false);
				setError(data.message);
				error ?? console.log(error);
			}
		} else {
			setError(
				"You appear to be offline. Check your internet connection"
			);
			console.log("error");
		}
	};

	console.log({ bal: users });
	const acc = 1;
	console.log(users?.[acc]?.account_bal);

	if (account_no) {
		var acc_pos = users
			.map((x: any) => {
				return x.account_no;
			})
			.indexOf(+account_no);
	}

	console.log(acc_pos);

	return (
		<AdminLayout>
			<div className={styles.details}>
				<div className={`${styles.con} ${styles.over}`}>
					<h6 className="tac">Update Account Balance</h6>
					<form onSubmit={updateBal}>
						<input
							type="number"
							value={account_no}
							placeholder="Account Number"
							onChange={(e) => setAccount_no(e.target.value)}
						/>
						<div>
							{acc_pos !== -1 ? (
								<div>
									<p>Name: {users?.[acc_pos]?.fullName}</p>
									<p>
										Current Account Balance:
										{users?.[acc_pos]?.account_bal}
									</p>
								</div>
							) : (
								<p>
									The account number you provided does not
									exist
								</p>
							)}
						</div>
						<input
							type="number"
							placeholder="Amount"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
						/>
						{/* <button onClick={()=>}>+</button> */}
						{/* <button>-</button> */}
						<div style={{ marginBottom: "20px" }}>
							<label>
								Select Currency:
								<input
									type="radio"
									value="$"
									name="currency"
									checked={currency === "$"}
									onClick={(e: any) =>
										setCurrency(e.target.value)
									}
								/>{" "}
								$
								<input
									type="radio"
									value="€"
									name="currency"
									checked={currency === "€"}
									onClick={(e: any) =>
										setCurrency(e.target.value)
									}
								/>{" "}
								€
							</label>
						</div>
						<button
							type="submit"
							disabled={loading}
							className={styles.btn}
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</AdminLayout>
	);
};

export default UpdateBal;
