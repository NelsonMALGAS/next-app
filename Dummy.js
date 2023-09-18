export async function fetchEvents() {
	try {
		const response = await fetch(
			"https://next-project-a3a71-default-rtdb.firebaseio.com/events.json",
		);

		if (!response.ok) {
			throw new Error("Failed to fetch data");
		}

		const data = await response.json();

		const eventsArray = [];

		for (const key in data) {
			if (data.hasOwnProperty(key)) {
				const event = { id: key, ...data[key] };
				eventsArray.push(event);
			}
		}

		return eventsArray;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
}

export async function getFeaturedEvents() {
	const events = await fetchEvents();
	return events.filter((event) => event.isFeatured);
}

export async function getAllEvents() {
	return await fetchEvents();
}

export async function getFilteredEvents(dateFilter) {
	const { year, month } = dateFilter;
	const events = await fetchEvents();

	let filteredEvents = events.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
	});

	return filteredEvents;
}

export async function getEventById(id) {
	const events = await fetchEvents();
	return events.find((event) => event.id === id);
}

export async function getAllEventIds() {
	const allEvents = await fetchEvents();

	const eventIds = allEvents.map((event) => event.id);

	return eventIds;
}
