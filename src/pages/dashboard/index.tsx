import React from "react";
import UserLayout from "@/components/dashboard/UserLayout";
import Details from "@/components/dashboard/Details";

const dashboard = () => {
	return (
		<UserLayout>
			<Details />
		</UserLayout>
	);
};

export default dashboard;
