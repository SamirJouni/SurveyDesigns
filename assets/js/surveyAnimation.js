/* This script controls the animations of when a survey is clicked */

document.addEventListener('DOMContentLoaded', function () {
	"use strict";
	const surveys = Array.from(document.getElementsByClassName('survey'));
	const svgicons = Array.from(document.getElementsByClassName('svgIcon'));
	var mouseOverSVG = false;


  surveys.forEach(function(survey) {

		survey.addEventListener('click', function() {

        survey.classList.add('zoomInOut', 'transparent');

				setTimeout(function() {
          survey.classList.remove('zoomInOut', 'transparent');
				}, 200);
			});
		});


		svgicons.forEach(function(svgicon) {

			svgicon.addEventListener('mouseover', function () {

				mouseOverSVG = true;
				console.log(mouseOverSVG);
			});
		});

			});