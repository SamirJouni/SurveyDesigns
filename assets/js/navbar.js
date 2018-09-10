/* This is a script that redirects the user to the homepage if the icon in the navbar is clicked */
document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const logo = document.getElementsByClassName('logoWithText')[0];
	const projectRepo = document.getElementById('projectRepo');

	/* Take user to homepage when the logo in the left corner of the navbar is clicked */
	logo.addEventListener('click', function () {

		window.location.href = "../../index.html"
	});

	/* event listener that opens the page of the repo of this project when the github logo
	is pressed */
	projectRepo.addEventListener('click', function () {
		window.location.href = "https://github.com/zero-to-mastery/TheVerySpecialProject"
	});
});