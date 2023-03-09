import { IMultipleTag } from "@/@types/form";
import Close from "@/components/icon/Close";
import { useState } from "react";
import WrapInput from "../shared/WrapInput";
import { ListTag, ListTagPicked, Tag, TagPicked } from "./style";

const MultipleTag = ({
	error,
	value,
	options,
	label,
	subLabel,
	onChange,
}: IMultipleTag) => {
	const handleSelectTag = (tag: string) => {
		const newValue = [...value];

		newValue.push(tag);

		onChange(newValue);
	};

	const handleRemoveTag = (tag: string) => {
		const newValue = [...value];

		const tagIndex = newValue.findIndex((e) => e === tag);

		newValue.splice(tagIndex, 1);

		onChange(newValue);
	};

	return (
		<WrapInput label={label} subLabel={subLabel} error={error}>
			<div>
				{!!value.length && (
					<ListTagPicked>
						{value.map((item) => (
							<TagPicked key={"TagPicked-" + item}>
								{item} <Close onClick={() => handleRemoveTag(item)} />
							</TagPicked>
						))}
					</ListTagPicked>
				)}
				<ListTag>
					{options.map(
						(option) =>
							!value.includes(option) && (
								<Tag
									onClick={() => handleSelectTag(option)}
									key={"TagPicked-" + option}
								>
									{option}
								</Tag>
							)
					)}
				</ListTag>
			</div>
		</WrapInput>
	);
};

export default MultipleTag;
