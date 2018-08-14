/* This script controls the animations of when a survey is clicked */

document.addEventListener('DOMContentLoaded', function () {
	"use strict";
	const surveys = Array.from(document.getElementsByClassName('survey'));
	const svgIcons = Array.from(document.getElementsByClassName('svgIcon'));
	var mouseOverSVG = false;


	/* adds an event listener to each listed survey, to play the the "Zoom Out and Back In" animation once a survey is clicked */
  surveys.forEach(function(survey) {

		survey.addEventListener('click', function() {

			if (!mouseOverSVG) {
        survey.classList.add('zoomInOut', 'transparent');

				setTimeout(function() {
          survey.classList.remove('zoomInOut', 'transparent');
				}, 200);
			}
			});
		});


		svgIcons.forEach(function(svgIcon) {

			svgIcon.addEventListener('mouseover', function () {

				mouseOverSVG = true;
			});


			svgIcon.addEventListener('mouseleave', function () {

				mouseOverSVG = false;
			});

			svgIcon.addEventListener('click', function() {

        svgIcon.classList.add('zoomInOut', 'transparent');

				setTimeout(function() {
          svgIcon.classList.remove('zoomInOut', 'transparent');
				}, 200);
		});
	});
});