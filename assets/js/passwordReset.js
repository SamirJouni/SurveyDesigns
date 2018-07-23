/* This redirects to the page that tells the user that an email has been sent to reset the password */

document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const submitButton = document.getElementById('resetPassword');
	const usernameInput = document.getElementById('usernameInput');


	submitButton.addEventListener('click', function(event){

		event.preventDefault();
		const username = usernameInput.value;


		if (username) {
			window.location.href = "resetEmail.html";
		}
	});
});