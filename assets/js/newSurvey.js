/* This script corresponds to the create survey button on the homepage */

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