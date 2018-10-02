/* This is a script that redirects the user to the homepage if the icon in the navbar is clicked */
document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const logo = document.getElementsByClassName('logoWithText')[0];
	const projectRepo = document.getElementById('projectRepo');
	const  navbar = document.getElementsByClassName('navbar');
	navbar[0].style.transition = "all 0.5s";

	window.addEventListener("wheel",onWheelRoll);	//whenever changes execute the following function
	let wheelRollCounter = 0;
	function onWheelRoll(e) {
		// rolling down
		if (window.scrollY >= 150 && e.deltaY > 0) {
			navbar[0].style.transform = "translate(0, -100%)";
		}
		else if (e.deltaY < 0 && navbar[0].getBoundingClientRect().top < 0) {
			navbar[0].style.transform = "translate(0, 0%)";
		}
	}

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