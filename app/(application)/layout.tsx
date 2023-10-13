import Navbar from "@/components/Navbar/Navbar";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<main className="px-8 text-secondary">{children}</main>
		</>
	);
}
