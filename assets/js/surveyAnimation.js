/* This script controls the animations of when a survey is clicked */

document.addEventListener('DOMContentLoaded', function () {
	"use strict";
	const surveys = Array.from(document.getElementsByClassName('survey'));
	const svgIcons = Array.from(document.getElementsByClassName('svgIcon'));
	var mouseOverSVG = false;


  surveys.forEach(function(survey) {

		survey.addEventListener('click', function() {

        survey.classList.add('zoomInOut', 'transparent');

				setTimeout(function() {
          survey.classList.remove('zoomInOut', 'transparent');
				}, 200);
			});
		});


		svgIcons.forEach(function(svgIcon) {

			svgIcon.addEventListener('mouseover', function () {

				mouseOverSVG = true;
			});
		});

			svgIcon.addEventListener('click', function() {

        svgIcon.classList.add('zoomInOut', 'transparent');

				setTimeout(function() {
          svgIcon.classList.remove('zoomInOut', 'transparent');
				}, 200);
		});

			});