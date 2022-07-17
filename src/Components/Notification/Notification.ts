function notify(message: string) {
	alert(message);
}

function error(message: string) {
	alert(message);
}

export const notification = Object.freeze({ notify, error });
