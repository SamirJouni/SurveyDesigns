/* This redirects the user to the page where they could create a new survey when the create new survey button is pressed */

document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	/* event listener for the create survey button, when clicked, the page loads where the user could create a survey */
	const createSurvey = document.getElementsByClassName('createSurvey')[0];
	createSurvey.addEventListener('click', newSurvey);
});

function newSurvey () {
	"use strict";
	window.location.href = 'assets/html/createSurvey.html';
}