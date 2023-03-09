import { useState, FormEvent } from "react";

import Card from "@/components/Card";
import Collection from "@/components/Collection";
import CheckBox from "@/components/form/CheckBox";
import DatePicker from "@/components/form/DatePicker";
import MultipleTag from "@/components/form/MultpleTag";
import Radio from "@/components/form/Radio";
import TextArea from "@/components/form/TextArea";
import TextField from "@/components/form/TextField";
import TimePicker from "@/components/form/TimePicker";
import TitleTextField from "@/components/form/TitleTextField";
import Calendar from "@/components/icon/Calendar";
import Clock from "@/components/icon/Clock";
import CurrencyDollar from "@/components/icon/CurrencyDollar";
import LocationMarker from "@/components/icon/LocationMarker";
import UserGroup from "@/components/icon/UserGroup";

import { convertTime } from "@/utils/common";

import { Form, Heading, Item, WrapItem } from "./style";

import { ISocial } from "@/@types/social";
import validate from "./validate";
import axios from "axios";
import Button from "@/components/form/Button";
import PopupMessage from "@/components/form/PopupMessage";

export default function CreateSocialForm() {
	const [social, setSocial] = useState<ISocial>({
		title: "Untitle Event",
		startAt: new Date().toISOString(),
		venue: "",
		capacity: 0,
		price: 0,
		description: "",
		banner: "",
		tags: [],
		isManualApprove: false,
		privacy: "Public",
	});

	const [error, setError] = useState({
		title: "",
		venue: "",
		capacity: "",
		price: "",
		description: "",
		banner: "",
		tags: "",
	});

	const [showMessage, setShowMessage] = useState({
		show: false,
		status: false,
		message: "",
	});

	const setSocialValue = (key: string, value: any) => {
		// set value for social event by specific key
		setSocial({
			...social,
			[key]: value,
		});

		// hiding error message by specific key
		setError({
			...error,
			[key]: "",
		});
	};

	const onStartAtChange = (key: "time" | "date", value: string) => {
		const newDate = new Date(social.startAt);

		switch (key) {
			case "time":
				// convert value time picker
				const [hour, min, sec] = value.split(":");
				newDate.setHours(parseInt(hour), parseInt(min), parseInt(sec));
				break;
			case "date":
				// convert value date picker
				const [year, month, day] = value.split("-");
				newDate.setFullYear(parseInt(year));
				newDate.setMonth(parseInt(month));
				newDate.setDate(parseInt(day));

				break;

			default:
				break;
		}

		setSocial({
			...social,
			startAt: newDate.toISOString(),
		});
	};

	const { year, month, day, hour, min, sec } = convertTime(social.startAt);

	const dateValue = `${year}-${month}-${day}`;
	const timeValue = `${hour}:${min}:${sec}`;

	const privacyOptions = [
		{
			value: "Public",
			label: "Public",
		},
		{
			value: "Curated Audience",
			label: "Curated Audience",
		},
		{
			value: "Community Only",
			label: "Community Only",
		},
	];

	const tagOptions = ["Engineering", "Product", "Marketing", "Design"];

	const collections = [
		"https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg",
		"https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_2.jpg",
		"https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_3.jpg",
		"https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_4.jpg",
		"https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_5.jpg",
		"https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_6.jpg",
		"https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_7.jpg",
		"https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_8.jpg",
		"https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_9.jpg",
		"https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_10.jpg",
	];

	const onCreateSocialEvent = async (e: any) => {
		e.preventDefault();

		const { isPass, error } = validate(social);

		if (isPass) {
			try {
				const result = await axios.post(
					"https://api.supermomos-dev.com/interview/social",
					social
				);

				setShowMessage({
					status: true,
					show: true,
					message: "Successfully created",
				});
			} catch (error) {
				setShowMessage({
					status: false,
					show: true,
					message: "Something went wrong, plase try again later",
				});
			}

			return;
		}

		setError(error);
	};

	return (
		<Form onSubmit={onCreateSocialEvent}>
			<WrapItem>
				<Item percent={40}>
					<WrapItem>
						<Item percent={100}>
							<TitleTextField
								value={social.title}
								onChange={(e) => setSocialValue("title", e.target.innerText)}
								error={error.title}
							/>
						</Item>

						<Item percent={50}>
							<DatePicker
								value={dateValue}
								onChange={(e) => onStartAtChange("date", e.target.value)}
								icon={<Calendar />}
							/>
						</Item>

						<Item percent={50}>
							<TimePicker
								value={timeValue}
								onChange={(e) => onStartAtChange("time", e.target.value)}
								step="2"
								icon={<Clock />}
							/>
						</Item>

						<Item percent={100}>
							<TextField
								value={social.venue}
								onChange={(e) => setSocialValue("venue", e.target.value)}
								placeholder="Venue"
								error={error.venue}
								icon={<LocationMarker />}
							/>
						</Item>

						<Item percent={50}>
							<TextField
								value={social.capacity}
								onChange={(e) => setSocialValue("capacity", e.target.value)}
								placeholder="Max capacity"
								error={error.capacity}
								type="number"
								icon={<UserGroup />}
							/>
						</Item>

						<Item percent={50}>
							<TextField
								value={social.price}
								onChange={(e) => setSocialValue("price", e.target.value)}
								placeholder="Cost per person"
								error={error.price}
								type="number"
								icon={<CurrencyDollar />}
							/>
						</Item>
					</WrapItem>
				</Item>

				<Item percent={52}>
					<Collection
						onChange={(value) => setSocialValue("banner", value)}
						images={collections}
						value={social.banner}
						error={error.banner}
					/>
				</Item>

				<Item percent={52}>
					<TextArea
						label="Description"
						value={social.description}
						onChange={(e) => setSocialValue("description", e.target.value)}
						placeholder="Description of your event.."
						error={error.description}
					/>
				</Item>

				<Item percent={52}>
					<Card>
						<Heading>Settings</Heading>

						<CheckBox
							id="isManualApprove"
							onChange={(e) =>
								setSocialValue("isManualApprove", e.target.checked)
							}
							label="I want to approve attendees"
							value={social.isManualApprove + ""}
						/>

						<Radio
							id="privacy"
							options={privacyOptions}
							value={social.privacy}
							onChange={(e) => setSocialValue("privacy", e.target.value)}
							label="Privacy"
							name="privacy"
						/>

						<MultipleTag
							value={social.tags}
							onChange={(val) => setSocialValue("tags", val)}
							options={tagOptions}
							label="Tag your social"
							subLabel="Pick tags for our curation engine to work its magin"
							error={error.tags}
						/>
					</Card>

					<Button type="submit">CREATE SOCIAL</Button>
				</Item>
			</WrapItem>

			{showMessage.show && (
				<PopupMessage
					status={showMessage.status}
					message={showMessage.message}
					onClose={() => setShowMessage({ ...showMessage, show: false })}
				/>
			)}
		</Form>
	);
}
