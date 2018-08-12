/* This script corresponds to the reset.html page */

document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const submitButton = document.getElementById('resetPassword');
	const usernameInput = document.getElementById('usernameInput');

/* event listener for the button that says "submit", when pressed the user will be informed that an email has been sent to recover the password */
	submitButton.addEventListener('click', function(event){

		event.preventDefault();
		const username = usernameInput.value;


		if (username) {
			window.location.href = "resetEmail.html";
		}
	});
});