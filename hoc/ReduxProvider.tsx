"use client";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store/store";
import { Provider } from "react-redux";
import { ReactNode } from "react";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>{children}</PersistGate>
		</Provider>
	);
};

export default ReduxProvider;
