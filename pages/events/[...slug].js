import { getFilteredEvents } from "@/Dummy";
import { useRouter } from "next/router";
import EventList from "@/Components/events/EventList";
import ResultsTitle from "@/Components/results-title/results-title";
import { Fragment, useEffect, useState } from "react";
import Button from "@/Components/UI/button";
import ErrorAlert from "@/Components/UI/error-alert/error-alert";

export default function FilteredEventsPage() {
	const router = useRouter();

	const FilteredData = router.query.slug;

	if (!FilteredData) {
		return <p className="centre">Loading ...</p>;
	}

	const filteredYear = FilteredData[0];
	const filteredMonth = FilteredData[1];

	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 2021 ||
		numMonth < 1 ||
		numMonth > 12
	) {
		return (
			<Fragment>
				<ErrorAlert>
					<p>Invalid filter ,please adjust your filter</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</Fragment>
		);
	}

	const [filteredEvents, setFilteredEvents] = useState([]);

	useEffect(() => {
		// Fetch filtered events data asynchronously using getFilteredEvents
		const fetchFilteredEvents = async () => {
			try {
				const events = await getFilteredEvents({
					year: numYear,
					month: numMonth,
				});
				setFilteredEvents(events);
			} catch (error) {
				console.error("Error fetching filtered events:", error);
			}
		};

		fetchFilteredEvents();
	}, [numYear, numMonth]);

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<Fragment>
				<ErrorAlert>
					<p>No Events found for the chosen filter</p>
				</ErrorAlert>
				<div className="centre">
					<Button link="/events">Show All Events</Button>
				</div>
			</Fragment>
		);
	}

	const date = new Date(numYear, numMonth - 1);

	return (
		<Fragment>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</Fragment>
	);
}
