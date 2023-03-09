const LocationMarker = (props: any) => (
	<svg
		width={24}
		height={24}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M7.08 5.638a6.959 6.959 0 0 1 9.84 9.841L12 20.4l-4.92-4.92a6.959 6.959 0 0 1 0-9.842Zm4.92 6.91a1.988 1.988 0 1 0 0-3.977 1.988 1.988 0 0 0 0 3.976Z"
			fill="#14597A"
		/>
	</svg>
);

export default LocationMarker;
