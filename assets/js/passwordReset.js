document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const submitButton = document.getElementById('resetPassword');
	const usernameInput = document.getElementById('usernameInput');


	submitButton.addEventListener('click', function(event){

		event.preventDefault();
		var username = usernameInput.value;


		if (username) {
			window.location.href = "resetEmail.html";
		}
	});
});