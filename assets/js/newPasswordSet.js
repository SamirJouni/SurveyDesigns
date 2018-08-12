/* This script compares the passwords and if the conditions are met, then it opens the new password set html page */
document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const submitButton = document.getElementById('resetPassword');
	const passwordInput = document.getElementById('passwordInput');
	const passwordInput2 = document.getElementById('passwordInput2');

	/* event listener to compare passwords and redirect to newPasswordSet.html when the button is pressed */
	submitButton.addEventListener('click', function(event){

		event.preventDefault();
		const password = passwordInput.value;
		const password2 = passwordInput2.value;


		if (password && (password === password2) && (password.length >= 8)) {
			window.location.href = "newPasswordSet.html";
		}
	});
});