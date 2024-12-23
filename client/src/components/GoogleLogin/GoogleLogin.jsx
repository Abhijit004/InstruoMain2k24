import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../../services/api";


export default (props) => {
	const responseGoogle = async (authResult) => {
		try {
			if (authResult["code"]) {
				console.log(`AUTH RESULT CODE: ${authResult.code}`);
				const result = await googleAuth(authResult.code);
				props.setUser(result.data.data.user);
				alert("successfuly logged in");
			} else {
				console.log(`Auth result:  ${authResult}`);
				throw new Error(authResult);
			}
		} catch (e) {
			console.log(e);
		}
	};

	const googleLogin = useGoogleLogin({
		onSuccess: responseGoogle,
		onError: responseGoogle,
		flow: "auth-code",
	});

	return (
		<button
			style={{
				padding: "20px 40px",
			}}
			onClick={googleLogin}
		>
			Sign in with Google
		</button>
	);
};