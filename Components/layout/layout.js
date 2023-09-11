import { Fragment, useContext } from "react";
import MainHeader from "./main-header";
import Notification from "../UI/notification";
import NotificationContext from "../store/notification-context";

export default function Layout(props) {
	const { children } = props;

	const notificationCxt = useContext(NotificationContext);

	const activeNotification = notificationCxt.notification;

	return (
		<Fragment>
			<MainHeader />
			<main>{children}</main>
			{activeNotification && (
				<Notification
					title={activeNotification.title}
					message={activeNotification.message}
					status={activeNotification.status}
				/>
			)}
		</Fragment>
	);
}
