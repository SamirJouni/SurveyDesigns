/* This script controls the animations of when a survey is clicked */

document.addEventListener('DOMContentLoaded', function () {
	"use strict";
	const surveys = Array.from(document.getElementsByClassName('survey'));


  surveys.forEach(function(survey) {

		survey.addEventListener('click', function() {

        survey.classList.add('zoomInOut', 'transparent');

				setTimeout(function() {
          survey.classList.remove('zoomInOut', 'transparent');
				}, 200);
			});
		});

		const svgicon = Array.from(document.getElementsByClassName('svgIcon'));
			});