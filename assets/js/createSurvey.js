/* This script controls the seperate animations and interactions for the survey creation on Create A Survey section */

document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const modal = document.getElementById('accountModal');
	const buttons = document.getElementsByClassName('addAQuestion');
	const close = document.getElementById('closeModal');
	const NumberOfButtons = buttons.length;


	for (var i = 0; i < NumberOfButtons; i++) {

		buttons[i].addEventListener('click', function () {
			modal.style.display = "block";
		});
	}

	close.addEventListener('click', function () {
		modal.style.display = "none";
	});


	window.addEventListener('click', function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	});
});