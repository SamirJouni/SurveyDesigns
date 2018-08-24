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
			const content5 = document.createElement('div');

			content1.textContent = "Enter The Question Below";
			content3.placeholder = "Please Enter A Question";
			content2.appendChild(content3);
			content4.textContent = "Send To Preview";
			content5.appendChild(content4);
			content5.classList.add("sendToPreview");


			modalTextContent.appendChild(content1);
			modalTextContent.appendChild(content2);
			modalTextContent.appendChild(content5);

			togglePlaceholderOnClick();

			/* Send Question To Preview */
			content4.addEventListener('click', function () {

				if (content3.value) {
					const questionObject = {
						question: content3.value,
					}
					createPreview(1, questionObject);
				}
			});

			/* specific modal creation if the "add a one option question" button was pressed */
		} else if (buttonId[1] === '2') {

			clearContent();

			const content1 = document.createElement('p');
			const content2 = document.createElement('div');
			const content3 = document.createElement('input');
			const content4 = document.createElement('input');
			const content5 = document.createElement('button');
			const content6 = document.createElement('button');
			const content7 = document.createElement('div');
			const content8 = document.createElement('span');
			const content9 = document.createElement('div');
			let optionCounter = 0;
			let optionsArray = [];

			content1.textContent = "Enter The Question Below";
			content3.placeholder = "Please Enter A Question";
			content2.appendChild(content3);
			content4.placeholder = "Please Enter An Option";
			content5.textContent = "Add More Options";
			content5.classList.add("addOption");
			content8.textContent = optionCounter.toString();
			content9.classList.add('addMore');
			content9.appendChild(content5);
			content9.appendChild(content8);
			content6.textContent = "Send To Preview";
			content7.appendChild(content6);
			content7.classList.add("sendToPreview");

			content5.addEventListener('click', function () {

				if (content4.value) {
					optionCounter++;
					content8.textContent = optionCounter.toString();
					optionsArray.push(content4.value);
					content4.value = "";
				}
			});

			modalTextContent.appendChild(content1);
			modalTextContent.appendChild(content2);
			modalTextContent.appendChild(content4);
			modalTextContent.appendChild(content9);
			modalTextContent.appendChild(content7);

			togglePlaceholderOnClick();

			/* Send Question To Preview */
			content6.addEventListener('click', function () {

				if (content3.value && content4.value) {

					optionsArray.push(content4.value);

					const questionObject = {
						question: content3.value,
						options: optionsArray,

					}
					createPreview(2, questionObject);
				}
			});

			/* specific modal creation if the "add a multiple choice question" button was pressed */
		} else if (buttonId[1] === '3') {

			clearContent();

			const content1 = document.createElement('p');
			const content2 = document.createElement('div');
			const content3 = document.createElement('input');
			const content4 = document.createElement('input');
			const content5 = document.createElement('button');
			const content6 = document.createElement('button');
			const content7 = document.createElement('div');
			const content8 = document.createElement('span');
			const content9 = document.createElement('div');
			let choiceCounter = 0;
			let choicesArray = [];

			content1.textContent = "Enter A Question Below";
			content3.placeholder = "Please Enter A Question";
			content2.appendChild(content3);
			content4.placeholder = "Please Enter A choice";
			content5.textContent = "Add More Choices";
			content5.classList.add("addChoice");
			content8.textContent = choiceCounter.toString();
			content6.textContent = "Send To Preview";
			content9.classList.add('addMore');
			content9.appendChild(content5);
			content9.appendChild(content8);
			content7.appendChild(content6);
			content7.classList.add("sendToPreview");


			content5.addEventListener('click', function () {

				if (content4.value) {
					choiceCounter++;
					content8.textContent = choiceCounter.toString();
					choicesArray.push(content4.value);
					content4.value = "";
				}
			});

			modalTextContent.appendChild(content1);
			modalTextContent.appendChild(content2);
			modalTextContent.appendChild(content4);
			modalTextContent.appendChild(content9);
			modalTextContent.appendChild(content7);

			togglePlaceholderOnClick();

			/* Send Question To Preview */
			content6.addEventListener('click', function () {

				if (content3.value && content4.value) {

					choicesArray.push(content4.value);

					const questionObject = {
						question: content3.value,
						choices: choicesArray,

					}
					createPreview(3, questionObject);
				}
			});
		}
	}

	/* A fuction that clears the content of the modal, used to clear the modal before
	adding the content to prevent duplicate content from other button presses */

	function clearContent() {
		while (modalTextContent.hasChildNodes()) {
			modalTextContent.removeChild(modalTextContent.lastChild);
		}
	}
});

function togglePlaceholderOnClick() {

	const Elements = Array.from(document.querySelectorAll('input'));
	var ElementText = []; // An array to store placeholders

	Elements.forEach(function (element) {
		ElementText.push(element.placeholder); // pushing placeholders into the empty array

		element.addEventListener("focusin", function (event) { // Event listener when element is in focus
			element.placeholder = ""; // setting placeholder to nothing

		});

		window.addEventListener("click", function (event) { // Event listener on when element is not in focus
			if (!element.value && event.target !== element) {
				element.placeholder = ElementText[Elements.indexOf(element)]; // retrieving old placeholder and setting it
			}

		});
	});
}