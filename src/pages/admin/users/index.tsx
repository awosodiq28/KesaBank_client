import AuthContext from "@/components/AuthContext";
import React, { useContext } from "react";
import styles from "@/styles/Dashboard.module.css";
import AdminLayout from "@/components/admin/AdminLayout";

const Users = () => {
	const { users }: any = useContext(AuthContext);

	return (
		<AdminLayout>
			<div className={styles.details}>
				<div className={`${styles["con"]} ${styles["over"]}`}>
					<p>All Users</p>
					<table>
						<thead>
							<tr>
								<th>#</th>
								<th>AC Number</th>
								<th>Name</th>
								<th>Email</th>
								<th>Phone</th>
								<th>Status</th>
							</tr>
						</thead>
						{users ? (
							<tbody>
								{users.map((user: any, i: any) => (
									<tr key={i}>
										<td>{i + 1}</td>
										<td>{+user.account_no}</td>
										<td>{user.fullName}</td>
										<td>{user.email}</td>
										<td>{user.phoneNumber}</td>
										<td>
											{user.verified
												? "Verified"
												: "Unverified"}
										</td>
									</tr>
								))}
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

export default Users;
