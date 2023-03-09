const Calendar = (props: any) => (
	<svg
		width={48}
		height={48}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M15.6 7.2a2.1 2.1 0 0 0-2.1 2.1v2.1h-2.1a4.2 4.2 0 0 0-4.2 4.2v21a4.2 4.2 0 0 0 4.2 4.2h25.2a4.2 4.2 0 0 0 4.2-4.2v-21a4.2 4.2 0 0 0-4.2-4.2h-2.1V9.3a2.1 2.1 0 0 0-4.2 0v2.1H17.7V9.3a2.1 2.1 0 0 0-2.1-2.1Zm0 10.5a2.1 2.1 0 1 0 0 4.2h16.8a2.1 2.1 0 0 0 0-4.2H15.6Z"
			fill="#14597A"
		/>
	</svg>
);

export default Calendar;
