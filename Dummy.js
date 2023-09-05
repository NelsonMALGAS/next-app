const DUMMY_EVENTS = [
	{
		id: "e1",
		title: "Programming for everyone",
		description:
			"Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
		location: "Somestreet 25, 12345 San Somewhereo",
		date: "2021-05-12",
		image: "images/coding-event.jpg",
		isFeatured: false,
	},
	{
		id: "e2",
		title: "Networking for introverts",
		description:
			"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
		location: "New Wall Street 5, 98765 New Work",
		date: "2021-05-30",
		image: "images/introvert-event.jpg",
		isFeatured: true,
	},
	{
		id: "e3",
		title: "Networking for extroverts",
		description:
			"You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
		location: "My Street 12, 10115 Broke City",
		date: "2022-04-10",
		image: "images/extrovert-event.jpg",
		isFeatured: true,
	},
	{
		id: "e4",
		title: "Web Development Workshop",
		description:
			"Join us for a comprehensive web development workshop where we will cover front-end and back-end technologies to create modern and responsive websites.",
		location: "Tech Hub 123, 54321 Tech Town",
		date: "2022-09-15",
		image: "images/web-dev-event.jpg",
		isFeatured: true,
	},
	{
		id: "e5",
		title: "Artificial Intelligence Conference",
		description:
			"Explore the latest trends in artificial intelligence and machine learning. Engage with experts, attend hands-on workshops, and learn about AI applications.",
		location: "AI Convention Center, 88888 Data City",
		date: "2023-10-20",
		image: "images/ai-conference.jpg",
		isFeatured: true,
	},
	{
		id: "e6",
		title: "Creative Writing Masterclass",
		description:
			"Unleash your inner storyteller! This masterclass will help you hone your creative writing skills and develop compelling narratives.",
		location: "Imagination Institute, 56789 Wordville",
		date: "2023-11-05",
		image: "images/writing-masterclass.jpg",
		isFeatured: false,
	},
];

export function getFeaturedEvents() {
	return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
	return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
	const { year, month } = dateFilter;

	let filteredEvents = DUMMY_EVENTS.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
	});

	return filteredEvents;
}

export function getEventById(id) {
	return DUMMY_EVENTS.find((event) => event.id === id);
}
