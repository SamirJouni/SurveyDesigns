/* This script controls the seperate animations and interactions for the survey creation on Create A Survey section */

document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const modal = document.getElementById('accountModal');
	const buttons = document.getElementsByClassName('addAQuestion');
	const NumberOfButtons = buttons.length;
	const close = document.getElementById('closeModal');
	const modalTextContent = document.getElementById('modalTextContent');


/* Add an event listener to open modal when a button is clicked */
	for (var i = 0; i < NumberOfButtons; i++) {

		buttons[i].addEventListener('click', function (button) {
			modal.style.display = "block";
			createSpecificModal(button.target.id);
		});
	}

	/* Add an event listener to close modal when the x symbol is clicked */
	close.addEventListener('click', function () {
		modal.style.display = "none";
	});


	window.addEventListener('click', function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	});

	function createSpecificModal(buttonId) {

		if (buttonId[1] === '1') {

			clearContent();

			const content1 = document.createElement('p');
			const content2 = document.createElement('div');
			const content3 = document.createElement('input');
			const content4 = document.createElement('button');
			content1.textContent = "Enter The Question In The Input Field";
			content3.placeholder = "Please Enter A Question";
			content2.appendChild(content3);
			content4.textContent = "Send To Preview";

			modalTextContent.appendChild(content1);
			modalTextContent.appendChild(content2);
			modalTextContent.appendChild(content4);

		} else if (buttonId[1] === '2') {

			clearContent();

			const content1 = document.createElement('p');
			const content2 = document.createElement('div');
			const content3 = document.createElement('input');
			const content4 = document.createElement('input');
			const content5 = document.createElement('button');
			const content6 = document.createElement('button');
			content1.textContent = "Enter The Question In The Input Field";
			content3.placeholder = "Please Enter A Question";
			content2.appendChild(content3);
			content4.placeholder = "Please Enter an Option";
			content5.textContent = "Save Option Or Add More";
			content6.textContent = "Send To Preview";

			content5.addEventListener('click', function(){
				console.log(content4.value);
				content4.value = "";
			});

			modalTextContent.appendChild(content1);
			modalTextContent.appendChild(content2);
			modalTextContent.appendChild(content4);
			modalTextContent.appendChild(content5);
			modalTextContent.appendChild(content6);

		} else if (buttonId[1] === '3') {

			clearContent();

		}
	}
	function clearContent(){
		while (modalTextContent.hasChildNodes()) {
			modalTextContent.removeChild(modalTextContent.lastChild);
			}
	}
});