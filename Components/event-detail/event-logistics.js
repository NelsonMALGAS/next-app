import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingSpinner from "../loading/loading-spinner";
import { getEventById } from "@/Dummy";

function EventLogistics(props) {
	const { date, location, image, imageAlt } = props;
	const router = useRouter();
	const id = router.query.eventId;

	const [event, setEvent] = useState(null);

	useEffect(() => {
		async function fetchEventData() {
			try {
				const eventData = await getEventById(id);
				setEvent(eventData);
			} catch (error) {
				console.error("Error fetching event data:", error);
			}
		}

		if (id) {
			fetchEventData();
		}
	}, [id]);

	if (!event) {
		return <LoadingSpinner />;
	}

	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
	const addressText = location.replace(", ", "\n");

	return (
		<section className={classes.logistics}>
			<div className={classes.image}>
				<Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
			</div>
			<ul className={classes.list}>
				<LogisticsItem icon={DateIcon}>
					<time>{humanReadableDate}</time>
				</LogisticsItem>
				<LogisticsItem icon={AddressIcon}>
					<address>{addressText}</address>
				</LogisticsItem>
			</ul>
		</section>
	);
}

export default EventLogistics;
