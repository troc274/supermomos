const Close = (props: any) => (
	<svg
		width={12}
		height={12}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 12 12"
		{...props}
	>
		<path
			d="M9 3 3 9m0-6 6 6"
			stroke="#942F70"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default Close;
