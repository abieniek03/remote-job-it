"use client";

import { useAppDispatch } from "@/store/store";
import { getUserData } from "@/store/user/thunks";

interface IAuthentication {
	children: React.ReactNode;
	token: String | undefined;
}

export default function Authentication({ children, token }: IAuthentication) {
	const dispatch = useAppDispatch();

	if (token) {
		dispatch(getUserData(token.toString()));
	}
	return <>{children}</>;
}
