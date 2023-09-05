import EventItem from "../EventItem"
import classes from "./event-list.module.css"

export default function EventList(props){

    const {items} = props
    return (
        <>
          <ul className={classes.list}>
            {items.map(item => (
               <EventItem
               key={item.id}
                id={item.id}
                title = {item.title}
                location = {item.location}
                image = {item.image}
                date={item.date}
                description = {item.description}
                />
            ))}
          </ul>
        </>
    )
}