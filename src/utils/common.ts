export const convertTime = (dateTime: Date | string) => {
	const date = new Date(dateTime);

	const year = date.getFullYear();
	const month = ("0" + (date.getMonth() + 1)).slice(-2);
	const day = ("0" + date.getDate()).slice(-2);
	const hour = ("0" + date.getHours()).slice(-2);
	const min = ("0" + date.getMinutes()).slice(-2);
	const sec = ("0" + date.getSeconds()).slice(-2);

	return { year, month, day, hour, min, sec };
};
