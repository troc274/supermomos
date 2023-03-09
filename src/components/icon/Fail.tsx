const Fail = (props: any) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={100} height={101} viewBox="0 0 100 101" {...props}>
		<g fill="none" fillRule="evenodd">
			<circle cx={50} cy={50} r={50} fill="#FF5151" opacity={0.2} />
			<path
				d="M66.53 73.04 50 56.51 33.47 73.04l-5.51-5.51L44.49 51 27.96 34.47l5.51-5.51L50 45.49l16.53-16.53 5.51 5.51L55.51 51l16.53 16.53z"
				fill="#FF453A"
			/>
		</g>
	</svg>
);

export default Fail;
