import axios from "axios";

export default function UserButton({ email }: { email: string | null | undefined }) {
	function handleLogout() {
		axios.get("/api/auth/logout").then(() => (window.location.href = "/"));
	}

	return (
		<div className="font-bold text-xs flex flex-col items-end">
			<p>{email}</p>
			<button className="text-primary" onClick={handleLogout}>
				Wyloguj się
			</button>
		</div>
	);
}
