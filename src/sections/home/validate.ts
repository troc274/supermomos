import { ISocial } from "./../../@types/social";

export default function validate(social: ISocial) {
	const { title, venue, capacity, price, description, banner, tags } = social;

	let isPass = true;

	const error = {
		title: "",
		venue: "",
		capacity: "",
		price: "",
		description: "",
		banner: "",
		tags: "",
	};

	if (!title) {
		isPass = false;
		error.title = "Please input the title";
	}
	if (!venue) {
		isPass = false;
		error.venue = "Please input the venue";
	}
	if (!description) {
		isPass = false;
		error.description = "Please input the description";
	}
	if (!banner) {
		isPass = false;
		error.banner = "Please pick a banner from collection";
	}
	if (!capacity || price < 0) {
		isPass = false;
		error.capacity = "The capacity must be greater than 0";
	}
	if (!price || price < 0) {
		isPass = false;
		error.price = "The price must be greater than 0";
	}
	if (!tags || !tags.length) {
		isPass = false;
		error.tags = "Choose at least one tag";
	}

	return { isPass, error };
}
