const Clock = (props: any) => (
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
			d="M24 40.8c9.278 0 16.8-7.522 16.8-16.8S33.278 7.2 24 7.2 7.2 14.722 7.2 24 14.722 40.8 24 40.8Zm1-25.2a1 1 0 0 0-2 0V24a1 1 0 0 0 .293.707l5.94 5.94a1 1 0 0 0 1.414-1.414L25 23.586V15.6Z"
			fill="#14597A"
		/>
	</svg>
);

export default Clock;
