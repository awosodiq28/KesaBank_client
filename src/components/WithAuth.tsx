import { Component, useContext } from "react";
import Login from "@/pages/login";
import AuthContext from "./AuthContext";

const withAuth = (Component: any) => {
	const Auth = (props: any) => {
		const { user }: any = useContext(AuthContext);
		if (!user) {
			return <Login />;
		}
		return <Component {...props} />;
	};
	if (Component.getInitialProps) {
		Auth.getInitialProps = Component.getInitialProps;
	}
	return Auth;
};
