/* This script enables all the interactions on the my account page */

document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const username = document.getElementById('username');
	const changeUsername = document.getElementById('changeUsername');
	const usernameInput = document.getElementById('usernameInput');
	const email = document.getElementById('email');
	const changeEmail = document.getElementById('changeEmail');
	const emailInput = document.getElementById('emailInput');


	 changeUsername.addEventListener('click', function (){

		username.classList.toggle('displayNone');
		usernameInput.classList.toggle('displayNone');

		const usernameInputValue = usernameInput.value;

		if (usernameInputValue) {

			username.textContent = usernameInputValue;

		}

	 });

	 changeEmail.addEventListener('click', function (){

		email.classList.toggle('displayNone');
		emailInput.classList.toggle('displayNone');

		const emailInputValue = emailInput.value;

		if (emailInputValue) {

			email.textContent = emailInputValue;

		}

	 });


});