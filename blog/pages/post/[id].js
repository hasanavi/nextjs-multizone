import Link from "next/link";
import { useRouter } from "next/router";

export default function Post() {
	const router = useRouter();
	return (
		<div>
			<h3>Updated Post #{router.query.id}</h3>
			<p>Lorem ipsum</p>
			<Link href="/">
				<a>Back to blog</a>
			</Link>
		</div>
	);
}
