/* This script controls the seperate interactions for the survey creation on Create A Survey section */

document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const modal = document.getElementById('accountModal');
	const buttons = document.getElementsByClassName('addAQuestion');
	const NumberOfButtons = buttons.length;
	const close = document.getElementById('closeModal');
	const modalTextContent = document.getElementById('modalTextContent');


/* Add an event listener to open modal when a button among the question creation buttons is clicked */
	for (var i = 0; i < NumberOfButtons; i++) {

		buttons[i].addEventListener('click', function (button) {
			modal.style.display = "flex";
			createSpecificModal(button.target.id);
		});
	}

	/* Add an event listener to close modal when the x symbol is clicked */
	close.addEventListener('click', function () {
		modal.style.display = "none";
	});

	/* Add an event listener to close modal when anywhere outside of the modal is clicked is clicked */
	window.addEventListener('click', function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	});

	/* Create a specific content in the modal based on what button was pressed */
	function createSpecificModal(buttonId) {

		/* specific modal creation if the "add a question" button was pressed */
		if (buttonId[1] === '1') {

			clearContent();

			const content1 = document.createElement('p');
			const content2 = document.createElement('div');
			const content3 = document.createElement('input');
			const content4 = document.createElement('button');
			content1.textContent = "Enter The Question Below";
			content3.placeholder = "Please Enter A Question";
			content2.appendChild(content3);
			content4.textContent = "Send To Preview";

			modalTextContent.appendChild(content1);
			modalTextContent.appendChild(content2);
			modalTextContent.appendChild(content4);

		/* specific modal creation if the "add a one option question" button was pressed */
		} else if (buttonId[1] === '2') {

			clearContent();

			const content1 = document.createElement('p');
			const content2 = document.createElement('div');
			const content3 = document.createElement('input');
			const content4 = document.createElement('input');
			const content5 = document.createElement('button');
			const content6 = document.createElement('button');
			content1.textContent = "Enter The Question Below";
			content3.placeholder = "Please Enter A Question";
			content2.appendChild(content3);
			content4.placeholder = "Please Enter An Option";
			content5.textContent = "Add More";
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

			/* specific modal creation if the "add a multiple choice question" button was pressed */
		} else if (buttonId[1] === '3') {

			clearContent();

			const content1 = document.createElement('p');
			const content2 = document.createElement('div');
			const content3 = document.createElement('input');
			const content4 = document.createElement('input');
			const content5 = document.createElement('button');
			const content6 = document.createElement('button');
			content1.textContent = "Enter A Question Below";
			content3.placeholder = "Please Enter A Question";
			content2.appendChild(content3);
			content4.placeholder = "Please Enter A choice";
			content5.textContent = "Add More";
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

		}
	}

	/* A fuction that clears the content of the modal, used to clear the modal before
	adding the content to prevent duplicate content from other button presses */

	function clearContent(){
		while (modalTextContent.hasChildNodes()) {
			modalTextContent.removeChild(modalTextContent.lastChild);
			}
	}
});