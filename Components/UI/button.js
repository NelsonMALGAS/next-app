import Link from "next/link";
import classes from "./button.module.css";
export default function Button(props) {
	const { children, link, onClick } = props;

	if (link) {
		return (
			<>
				<Link href={link} className={classes.btn}>
					{children}
				</Link>
			</>
		);
	}

	return (
		<button className={classes.btn} onClick={onClick}>
			{children}
		</button>
	);
}
