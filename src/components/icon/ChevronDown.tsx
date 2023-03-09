const ChevronDown = (props: any) => (
	<svg
		width={20}
		height={20}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		{...props}
	>
		<path
			d="m5 7.5 5 5 5-5"
			stroke="#333"
			strokeWidth={1.67}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default ChevronDown;
