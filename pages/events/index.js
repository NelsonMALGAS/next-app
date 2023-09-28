import { fetchEvents } from "@/Dummy";
import EventList from "@/Components/events/EventList";
import EventsSearch from "@/Components/events/events-search";
import { useRouter } from "next/router";

export default function AllEventsPage(props) {
  const events = props.events;
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const allEvents = await fetchEvents();

  return {
    props: {
      events: allEvents,
    },
    revalidate : 600
  };
}
