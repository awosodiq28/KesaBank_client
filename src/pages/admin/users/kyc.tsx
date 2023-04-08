import AuthContext from "@/components/AuthContext";
import React, { useContext, useState } from "react";
import styles from "@/styles/Dashboard.module.css";
import AdminLayout from "@/components/admin/AdminLayout";
import { verify } from "crypto";
import Link from "next/link";

const Kyc = () => {
	const { users, getAllUsers }: any = useContext(AuthContext);
	const [loading, setLoading] = useState(false);

	const verify = async (
		// e: React.MouseEvent<HTMLButtonElement, MouseEvent>
		e: any
	) => {
		console.log(e.target.value);
		const account_no = e.target.value;
		setLoading(true);
		const res = await fetch(
			"https://kesa-bank-backend3.onrender.com/admin/verify-doc",
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				credentials: "include",
				body: JSON.stringify({
					account_no
				})
			}
		);
		const data = await res.json();
		console.log(data);
		setLoading(false);
		if (res.ok) {
			alert("User verified successfully");
			getAllUsers();
			console.log(data);
		} else {
			alert("unsuccessful");
		}
	};

	return (
		<AdminLayout>
			<div className={styles.details}>
				<div className={`${styles["con"]} ${styles["over"]}`}>
					<p>Users Documents</p>
					<table>
						<thead>
							<tr>
								<th>#</th>
								<th>AC Number</th>
								<th>Name</th>
								<th>Email</th>
								<th>ID Doc</th>
								<th>Address Doc</th>
								<th>Action</th>
							</tr>
						</thead>
						{users ? (
							// let kycList = users.filter((e: any) => {
							// 	return e.verification;
							// });

							// console.log(kycList);
							<tbody>
								{users.map(
									(user: any, i: any) =>
										user.verification && (
											<tr key={i}>
												<td></td>
												<td>{+user.account_no}</td>
												<td>{user.fullName}</td>
												<td>{user.email}</td>
												<td>
													{
														<Link
															href={
																user
																	?.verification
																	?.identity_doc
															}
														>
															Click here
														</Link>
													}
												</td>
												<td>
													{
														<Link
															href={
																user
																	?.verification
																	?.address_doc
															}
														>
															Click here
														</Link>
													}
												</td>
												<td>
													{user.verified ? (
														"Verified"
													) : (
														<button
															onClick={verify}
															value={
																user.account_no
															}
															disabled={loading}
														>
															Verify
														</button>
													)}
												</td>
											</tr>
										)
								)}
							</tbody>
						) : (
							""
						)}
					</table>
				</div>
			</div>
		</AdminLayout>
	);
};

export default Kyc;
