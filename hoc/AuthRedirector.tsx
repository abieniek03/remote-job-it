import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AuthRedirector({ children }: { children: React.ReactNode }) {
	const cookieStore = cookies();

	if (cookieStore.get("auth-token")) {
		console.log("przekierowanie");
		redirect("/panel");
	}

	return <>{children}</>;
}
