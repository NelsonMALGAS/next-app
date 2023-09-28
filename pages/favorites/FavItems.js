import { useContext } from "react";
import FavoriteContext from "../../Components/store/favorites";
import EventList from "../../Components/events/EventList";
import classes from "./FavItems.module.css";

function SelectedFavorites() {
	const favoriteCtx = useContext(FavoriteContext);
	const favorites = favoriteCtx.favorites;

	if (favoriteCtx.totalFavorites === 0) {
		return (
			<section className={classes.content}>
				<h1 className={classes.none}>The are no favorites</h1>
			</section>
		);
	}

	return (
		<section className={classes.content}>
			<h1 className={classes.title}>My Favorites</h1>
			<EventList items={favorites} />
		</section>
	);
}

export default SelectedFavorites;
