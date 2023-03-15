import AuthContext from "@/components/AuthContext";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import React, { useContext } from "react";

const PrivacyP = () => {
	// if (!user) {
	// 	checkUserLoggedIn();
	// }
	return (
		<div>
			<PrivacyPolicy />
		</div>
	);
};

export default PrivacyP;
