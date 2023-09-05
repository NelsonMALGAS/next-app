import { useContext } from "react";
import classes from "./events/event-item.module.css";
import Button from "./UI/button";
import DateIcon from "./icons/date-icon";
import AddressIcon from "./icons/address-icon";
import ArrowRightIcon from "./icons/arrow-right-icon";
import FavoriteContext from "./store/favorites";
import Image from "next/image";

export default function EventItem(props) {
	const { title, image, location, date, id, description } = props;

	const favoritesCtx = useContext(FavoriteContext);

	const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

	const toggleFavoriteStatus = () => {
		if (itemIsFavorite) {
			favoritesCtx.removeFavorite(id);
		} else {
			favoritesCtx.addFavorite({
				id: id,
				title: title,
				description: description,
				image: image,
				location: location,
				date: date,
			});
		}
	};

	const humanReadable = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const formattedAddress = location ? location.replace(", ", "\n") : "";

	const exploreLink = `/events/${id}`;

	return (
		<>
			<li key={id} className={classes.item}>
				<Image src={`/${image}`} alt={title} width={240} height={160} />
				<div className={classes.content}>
					<div className={classes.summary}>
						<h2>{title}</h2>
					</div>
					<div className={classes.date}>
						<DateIcon />
						<time>{humanReadable}</time>
					</div>
					<div className={classes.address}>
						<AddressIcon />
						<address>{formattedAddress}</address>
					</div>
					<div className={classes.actions}>
						<Button link={exploreLink}>
							<span>Explore Event</span>
							<span className={classes.icon}>
								<ArrowRightIcon />
							</span>
						</Button>
						<Button onClick={toggleFavoriteStatus}>
							{itemIsFavorite ? "remove from" : "Add to"} Favorites
						</Button>
					</div>
				</div>
			</li>
		</>
	);
}
