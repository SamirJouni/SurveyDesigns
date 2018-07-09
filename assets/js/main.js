document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const bottomText = document.getElementsByClassName('bottomText')[0];
	const ztmLogo = document.getElementsByClassName('ztmLogo')[0];
	const createSurvey = document.getElementsByClassName('createSurvey')[0];

	bottomText.addEventListener('click', goToZTM);
	ztmLogo.addEventListener('click', goToZTM);
	createSurvey.addEventListener('click', newSurvey);
});