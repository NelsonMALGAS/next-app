import { useState, useEffect, useContext } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "../store/notification-context";
import LoadingSpinner from "../loading/loading-spinner";

function Comments(props) {
	const { eventId } = props;

	const notificationCtx = useContext(NotificationContext);

	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState([]);
	const [isFetchingComments, setIsFetchingComments] = useState(false);

	useEffect(() => {
		if (showComments) {
			setIsFetchingComments(true);
			fetch(`/api/comments/${eventId}`)
				.then((resp) => resp.json())
				.then((data) => {
					setComments(data.comments);
					setIsFetchingComments(false);
				});
		}
	}, [showComments]);

	function toggleCommentsHandler() {
		setShowComments((prevStatus) => !prevStatus);
	}

	function addCommentHandler(commentData) {
		notificationCtx.showNotification({
			title: "Sending Comments...",
			message: "Your comment is currently being stored...",
			status: "pending",
		});

		fetch(`/api/comments/${eventId}`, {
			method: "POST",
			body: JSON.stringify(commentData),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}

				response.json().then((data) => {
					throw new Error(data.message || "Something went wrong!!");
				});
			})
			.then((data) => {
				notificationCtx.showNotification({
					title: "Success!",
					message: "Comment saved!",
					status: "success",
				});
			})
			.catch((error) => {
				notificationCtx.showNotification({
					title: "Error!",
					message: error.message || "Something went wrong",
					status: "error",
				});
			});
	}

	return (
		<section className={classes.comments}>
			<button onClick={toggleCommentsHandler}>
				{showComments ? "Hide" : "Show"} Comments
			</button>
			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{showComments && !isFetchingComments && <CommentList items={comments} />}
			{showComments && isFetchingComments && <LoadingSpinner />}
		</section>
	);
}

export default Comments;
