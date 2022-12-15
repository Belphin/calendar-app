export const rules = {
	required: (message: string = "Required") => ({
		required: true,
		message,
	}),
};
