document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const createSurvey = document.getElementsByClassName('createSurvey')[0];
	createSurvey.addEventListener('click', newSurvey);
});

function newSurvey () {
	"use strict";
	window.location.href = 'assets/html/createSurvey.html';
}