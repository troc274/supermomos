const Picture = (props: any) => (
	<svg
		width={24}
		height={24}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		{...props}
	>
		<g clipPath="url(#a)" fill="#14597A">
			<path d="M11.122 12.536a3 3 0 0 0-4.244 0l-6.84 6.84A4.991 4.991 0 0 0 5 24h14c.98 0 1.938-.29 2.753-.833l-10.63-10.631ZM18 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
			<path d="M19 0H5a5.006 5.006 0 0 0-5 5v11.586l5.464-5.464a5.001 5.001 0 0 1 7.072 0l10.631 10.631A4.97 4.97 0 0 0 24 19V5a5.006 5.006 0 0 0-5-5Zm-1 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#fff" d="M0 0h24v24H0z" />
			</clipPath>
		</defs>
	</svg>
);

export default Picture;
