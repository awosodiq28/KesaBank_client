import AuthContext from "@/components/AuthContext";
import UserLayout from "@/components/dashboard/UserLayout";
import Verify from "@/components/dashboard/Verify";
// import React, { useContext } from "react";

const VerifyPage = () => {
	// const { user }: any = useContext(AuthContext);

	return (
		<UserLayout>
			<Verify />

			{/* {!user?.verified ? (
				<Verify />
			) : (
				<p>
					Your documents have been submitted for Verification. <br />{" "}
					Your Verification might take a while. Please be patient.
					Thank you
				</p>
			)} */}
		</UserLayout>
	);
};

export default VerifyPage;
