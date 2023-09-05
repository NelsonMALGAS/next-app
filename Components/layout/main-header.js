import Link from "next/link";
import classes from "./main-header.module.css";
import { useContext } from "react";
import FavoriteContext from "../store/favorites";
import Button from "../UI/button";

export default function MainHeader() {
	const favoritesCtx = useContext(FavoriteContext);

	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link href="/">NextEvents</Link>
			</div>
			<nav className={classes.navigation}>
				<ul>
					<li className={classes.list}>
						<Link href="/events" className={classes.link}>Browse All Events</Link>{"   "}
						<Button link="/favorites/FavItems">
							<span className={classes.text}>My Favorites</span> <span className={classes.number}>{favoritesCtx.totalFavorites}</span>
						</Button>
					</li>
				</ul>
			</nav>
		</header>
	);
}
