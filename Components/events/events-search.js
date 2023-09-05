import Button from "../UI/button";
import classes from "./events-search.module.css";
import { useRef } from "react";

export default function EventsSearch(props) {
	const { onSearch } = props;

	const yearInput = useRef();
	const monthInput = useRef();

	const submitHandler = (e) => {
		e.preventDefault();

		const selectedYear = yearInput.current.value;
		const selectedMonth = monthInput.current.value;
		onSearch(selectedYear, selectedMonth);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.controls}>
				<div className={classes.control}>
					<label htmlFor="year">Year</label>
					<select id="year" ref={yearInput}>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
						<option value="2023">2023</option>
					</select>
				</div>
				<div className={classes.control}>
					<label htmlFor="month">Month</label>
					<select id="month" ref={monthInput}>
						<option value="1">Jan</option>
						<option value="2">Feb</option>
						<option value="3">March</option>
						<option value="4">Apr</option>
						<option value="5">May</option>
						<option value="6">Jun</option>
						<option value="7">Jul</option>
						<option value="8">Aug</option>
						<option value="9">Sept</option>
						<option value="10">Oct</option>
						<option value="11">Nov</option>
						<option value="12">Dec</option>
					</select>
				</div>
			</div>
			<Button>Filter Events</Button>
		</form>
	);
}
