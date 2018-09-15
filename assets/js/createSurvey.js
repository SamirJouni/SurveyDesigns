/* This script controls the seperate interactions for the survey creation on Create A Survey section */

document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const modal = document.getElementById('accountModal');
	const buttons = document.getElementsByClassName('addAQuestion');
	const dropdown = document.getElementsByClassName('dropdown');
	const NumberOfButtons = buttons.length;
	const close = document.getElementById('closeModal');
	const modalTextContent = document.getElementById('modalTextContent');
	const surveyTitle = document.getElementById('surveyTitle');
	const surveyTitlePreview = document.getElementById('surveyTitlePreview');
	let questionId = 0 ;

	let firstClick = [true,true,true];
	/* Add an event listener to open modal when a button among the question creation buttons is clicked */
	for (var i = 0; i < NumberOfButtons; i++) {
		buttons[i].addEventListener('click', function (button) {
			// modal.style.display = "flex";
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
		if(buttonId[1] === '0' && firstClick[0]){

			closeAll(1, buttonId[1]);
			closeAll(2, buttonId[1]);
			
			const currentdropdown = dropdown[buttonId[1]];
			
			$( currentdropdown ).animate({ height: "8vh" }, 200 );
			if(currentdropdown.children.length === 0) {
				const content1 = document.createElement('label');
				const content2 = document.createElement('input');
				const content3 = document.createElement('div');
				const content4 = document.createElement('label');

				content1.textContent = "Q" + (questionId + 1) + ": ";
				content2.placeholder = "Enter your question here";
				content3.textContent = "✔";
				content4.textContent = "100";
				let wordCounter = 100;
				let checkDelete = 0;
				currentdropdown.appendChild(content1);
				currentdropdown.appendChild(content2);
				currentdropdown.appendChild(content4);

				currentdropdown.style.paddingLeft = "8vw";

				currentdropdown.children[0].style.fontStyle = "italic";

				const countHolder = currentdropdown.children[2].style;
				countHolder.padding = "0.4vw 0.8vw 0 0.8vw";
				countHolder.height = "1.6vw";
				countHolder.borderRadius = "1.4vw";
				countHolder.position = "absolute";
				countHolder.left = "3vw";
				countHolder.top = "0.2vw";
				content4.fontFamily = "monospace";
				countHolder.opacity = "0.5";
				countHolder.boxShadow = "0 0 0.2vw 0 #ddd";
				countHolder.color = "#61d800";
				countHolder.transition = "0.2s all";
				currentdropdown.children[2].addEventListener('mouseenter', inCountEnter);
				function inCountEnter() {
					if (wordCounter > 12) {
						countHolder.opacity = "1";
						countHolder.boxShadow = "0 0 0.5vw 0 #ddd";
					}
				}
				currentdropdown.children[2].addEventListener('mouseout', inCountOver);
				function inCountOver() {
				if (wordCounter > 12) {
						countHolder.opacity = "0.5";
						countHolder.boxShadow = "0 0 0.2vw 0 #ddd";
					}
				}

				currentdropdown.children[2].title = "Maximum number of words";

				const input = currentdropdown.children[1].style;
				input.fontFamily = "'Montserrat',sans-serif";
				input.marginLeft = "1vw";
				input.marginRight = "4.3vw";
				input.height = "4vh";
				input.paddingLeft = "1vw";
				input.paddingRight = "3vw";
				input.color = "#555";
				input.border = "0";
				// input.borderBottom = ".3vh solid #888";
				input.backgroundColor = "#f1f2f3";
				input.borderRadius = "2.4vh";

				// children[1] is for input box inside the dropdown
				currentdropdown.children[1].addEventListener('focus', inFocus);
				function inFocus() {
					input.backgroundColor = "#fff";
					input.border = ".15vw solid #ddd";

				}
				currentdropdown.children[1].addEventListener('focusout', outFocus);
				function outFocus() {
					input.backgroundColor = "#f1f2f3";
					input.border = ".15vw solid #f1f2f3";
				}
				$(currentdropdown.children[1]).focus();
				currentdropdown.children[1].minLength = "10";
				currentdropdown.children[1].title = "minimum character length of a question should be " + currentdropdown.children[1].minLength;
				currentdropdown.children[1].size = "30";
				currentdropdown.children[1].addEventListener("input", onChange);
				currentdropdown.children[1].addEventListener("focus", () => {
					wordCounter--;
				});
				// run when enter is pressed inside the input field
				currentdropdown.children[1].addEventListener("keyup", function(e) {
					if(e.keyCode == '13' && $(currentdropdown.children[1]).is(':valid') && this.value.length) doneClicked();
				});
				$( currentdropdown.children[1] ).on('keydown keyup', function(e){
				    if (wordCounter === 0
				        	&& e.keyCode !== 46 // keycode for delete
				        	&& e.keyCode !== 8 // keycode for backspace
				       ) {
				       e.preventDefault();
				    }
				});
				function onChange(value) {
					if (wordCounter < 12) {
						countHolder.opacity = "1";
						countHolder.boxShadow = "0 0 0.5vw 0 #ddd";
						countHolder.color = "#ff7f7f";
					}
					if (wordCounter > 12) {
						countHolder.opacity = "0.5";
						countHolder.boxShadow = "0 0 0.2vw 0 #ddd";
						countHolder.color = "#61d800";
					}
					if (this.value.slice(-1) === " " && checkDelete < this.value.length) {
						console.log(wordCounter);
						wordCounter--;
						content4.textContent = wordCounter;
					} else if (this.value.slice(-1) === " " && checkDelete > this.value.length) {
						wordCounter++;
						content4.textContent = wordCounter;
					}
					checkDelete = this.value.length;
					// have to reassign the size because when the text inside the input box is again less than 10 
					// then it have to make the done button transparent
					currentdropdown.children[1].size = "30";
					// if the input text is valid and non-zero length then run this block
					// had to give the non-zero block because without it the input was showing valid at zero length also (maybe some bug)
					if($(currentdropdown.children[1]).is(':valid') && this.value.length) {
						// input.border = ".15vw solid #bfeac2";//green color borderBottom
						// add the done button with some styling // the styling is done in the viewDoen function itself
						viewDone(content3);
						// if the functin has this many characters then keep incrementing the size of the input box
						if (this.value.length > 0 && this.value.length < 59)
							currentdropdown.children[1].size = this.value.length + 21;
						// otherwise fix the size to 80
						// 80 is the size of the input block at 50 characters, so it won't show any flick while changing the size
						else 
							currentdropdown.children[1].size = 80;
					} 
					// if the input text is not valid
					else {
						input.border = ".15vw solid #ddd";// dark-grey color
						// remove the lastchild (done button) // when the lastChild has the text inside it 'Done'
						if(buttons[buttonId[1]].lastChild.textContent === content3.textContent) {
							buttons[buttonId[1]].removeChild(buttons[buttonId[1]].lastChild);
						}
					}
				}
				// When the Done button is pressed
				content3.addEventListener('click', function() {
					doneClicked();
				});
				function doneClicked(){
					if (content2.value) {
						const questionObject = {
							question: content2.value.includes('?') ? content2.value : content2.value + '?',
						}
						createPreview(1, questionObject, questionId);
						questionId++;
						modal.style.display = "none";
					}
					closeAll(buttonId[1], buttonId[1]);
				}
			}
			firstClick[0] = false;
			firstClick[1] = true;
		}

		// clicked single choice question button 
		else if (buttonId[1] === '1' && firstClick[1]) {
			var optionCount = 1;
			closeAll(0, buttonId[1]);
			closeAll(2, buttonId[1]);

			const currentdropdown = dropdown[buttonId[1]];
			
			$( currentdropdown ).animate({ height: "8vh" }, 200 );
			if(currentdropdown.children.length === 0) {
				const content1 = document.createElement('label');
				const content2 = document.createElement('input');
				const content3 = document.createElement('div');
				const content4 = document.createElement('label');
				const content5 = document.createElement('input');

				content1.textContent = "Q" + (questionId + 1) + ": ";
				content2.placeholder = "Enter your question here";
				content3.textContent = "✔";
				content4.textContent = optionCount + ")";
				content5.placeholder = "Enter your option";

				currentdropdown.appendChild(content1);
				currentdropdown.appendChild(content2);
				currentdropdown.appendChild(content4);
				currentdropdown.appendChild(content5);

				currentdropdown.style.paddingLeft = "7vw";

				currentdropdown.children[0].style.fontStyle = "italic";

				const input = currentdropdown.children[1].style;
				input.fontFamily = "'Montserrat',sans-serif";
				input.marginLeft = "1vw";
				input.height = "4vh";
				input.paddingLeft = ".5vw";
				input.border = "0";
				// input.borderBottom = ".3vh solid #888";
				input.backgroundColor = "#aaa";

				// children[1] is for input box
				$(currentdropdown.children[1]).focus();
				currentdropdown.children[1].minLength = "10";
				currentdropdown.children[1].title = "minimum character length of a question should be " + currentdropdown.children[1].minLength;
				currentdropdown.children[1].size = "39";
				currentdropdown.children[1].addEventListener("input", onChange);
				// run when enter is pressed inside the input field
				currentdropdown.children[1].addEventListener("keyup", function(e) {
					if(e.keyCode == '13' && $(currentdropdown.children[1]).is(':valid') && this.value.length) doneClicked();
				});
				function onChange(value) {
					currentdropdown.children[1].size = "39";
					if($(currentdropdown.children[1]).is(':valid') && this.value.length) {
						input.borderBottom = ".3vh solid #77bb00";
						viewDone(content3);
						if (this.value.length > 9 && this.value.length < 50)
							currentdropdown.children[1].size = this.value.length + 30;
						else 
							currentdropdown.children[1].size = 80;
					} else {
						input.borderBottom = ".3vh solid #888";
						if(buttons[buttonId[1]].lastChild.textContent === content3.textContent) {
							buttons[buttonId[1]].removeChild(buttons[buttonId[1]].lastChild);
						}
					}
				}
				content3.addEventListener('click', function() {
					doneClicked();
				});
				function doneClicked(){
					if (content2.value) {
						const questionObject = {
							question: content2.value.includes('?') ? content2.value : content2.value + '?',
						}
						createPreview(1, questionObject, questionId);
						questionId++;
						modal.style.display = "none";
					}
					closeAll(buttonId[1], buttonId[1]);
				}
			}
			firstClick[1] = false;
			firstClick[0] = true;
		} else {
			for (i = 0; i < firstClick.length; i++){
				closeAll(i, i);
			}
		}

		function viewDone(c){
			buttons[buttonId[1]].appendChild(c);
			c.style.boxShadow = "0 0 0.3vw 0 #ddd";
			c.style.padding = "0.2vw 0.6vw";
			c.style.position = "absolute";
			c.style.marginLeft = "24.4vw";
			c.style.top = "0.6vw";
			c.style.borderRadius = "1.2vw";
			c.style.fontSize = "1.5vw";
			c.style.color = "#77bb00";
		}
	}
	 // a is the dropdown which needs to be closed and b is the button which is clicked
	 // firstClick false means that the dropdown is open
	function closeAll(a, b) {
		var notClose = '100';
		const d = dropdown[a];
		$( d ).animate({ height: "0" }, 200 );
		setTimeout(ontimeout, 250);
		function ontimeout() {
			while (d.firstChild) {
				d.removeChild(d.firstChild);
			}
		} if (buttons[a].lastChild.textContent === '✔') {
			buttons[a].removeChild(buttons[a].lastChild);
		}
		firstClick[b] = true;
	}
	// 		/* specific modal creation if the "add a one option question" button was pressed */
	// 	else if (buttonId[1] === '2') {

	// 		clearContent();

	// 		const content1 = document.createElement('p');
	// 		const content2 = document.createElement('div');
	// 		const content3 = document.createElement('input');
	// 		const content4 = document.createElement('input');
	// 		const content5 = document.createElement('button');
	// 		const content6 = document.createElement('button');
	// 		const content7 = document.createElement('div');
	// 		const content8 = document.createElement('span');
	// 		const content9 = document.createElement('div');
	// 		let optionsCounter = 0;
	// 		let optionsArray = [];

	// 		content1.textContent = "Enter The Question Below";
	// 		content3.placeholder = "Please Enter A Question";
	// 		content2.appendChild(content3);
	// 		content4.placeholder = "Please Enter An Option";
	// 		content5.textContent = "Add More Options";
	// 		content5.classList.add("addOption");
	// 		content8.textContent = optionsCounter.toString();
	// 		content9.classList.add('addMore');
	// 		content9.appendChild(content5);
	// 		content9.appendChild(content8);
	// 		content6.textContent = "Send To Preview";
	// 		content7.appendChild(content6);
	// 		content7.classList.add("sendToPreview");

	// 		content5.addEventListener('click', function () {

	// 			if (content4.value) {
	// 				optionsCounter++;
	// 				content8.textContent = optionsCounter.toString();
	// 				optionsArray.push(content4.value);
	// 				content4.value = "";
	// 			}
	// 		});

	// 		modalTextContent.appendChild(content1);
	// 		modalTextContent.appendChild(content2);
	// 		modalTextContent.appendChild(content4);
	// 		modalTextContent.appendChild(content9);
	// 		modalTextContent.appendChild(content7);

	// 		togglePlaceholderOnClick();

	// 		/* Send Question To Preview */
	// 		content6.addEventListener('click', function () {

	// 			if (content3.value && (content4.value || (optionsCounter > 0))) {

	// 				if (content4.value) {
	// 					optionsArray.push(content4.value);
	// 				}

	// 				const questionObject = {
	// 					question: content3.value.includes('?') ? content3.value : content3.value + '?',
	// 					options: optionsArray,

	// 				}
	// 				createPreview(2, questionObject, questionId);
	// 				questionId++;
	// 				modal.style.display = "none";
	// 			}
	// 		});

	// 		 specific modal creation if the "add a multiple choice question" button was pressed 
	// 	} else if (buttonId[1] === '3') {

	// 		clearContent();

	// 		const content1 = document.createElement('p');
	// 		const content2 = document.createElement('div');
	// 		const content3 = document.createElement('input');
	// 		const content4 = document.createElement('input');
	// 		const content5 = document.createElement('button');
	// 		const content6 = document.createElement('button');
	// 		const content7 = document.createElement('div');
	// 		const content8 = document.createElement('span');
	// 		const content9 = document.createElement('div');
	// 		var choicesCounter = 0;
	// 		var choicesArray = [];

	// 		content1.textContent = "Enter A Question Below";
	// 		content3.placeholder = "Please Enter A Question";
	// 		content2.appendChild(content3);
	// 		content4.placeholder = "Please Enter A choice";
	// 		content5.textContent = "Add More Choices";
	// 		content5.classList.add("addChoice");
	// 		content8.textContent = choicesCounter.toString();
	// 		content6.textContent = "Send To Preview";
	// 		content9.classList.add('addMore');
	// 		content9.appendChild(content5);
	// 		content9.appendChild(content8);
	// 		content7.appendChild(content6);
	// 		content7.classList.add("sendToPreview");


	// 		content5.addEventListener('click', function () {

	// 			if (content4.value) {
	// 				choicesCounter++;
	// 				content8.textContent = choicesCounter.toString();
	// 				choicesArray.push(content4.value);
	// 				content4.value = "";
	// 			}
	// 		});

	// 		modalTextContent.appendChild(content1);
	// 		modalTextContent.appendChild(content2);
	// 		modalTextContent.appendChild(content4);
	// 		modalTextContent.appendChild(content9);
	// 		modalTextContent.appendChild(content7);

	// 		togglePlaceholderOnClick();

	// 		/* Send Question To Preview */
	// 		content6.addEventListener('click', function () {

	// 			if (content3.value && (content4.value || (choicesCounter > 0))) {

	// 				if (content4.value) {
	// 					choicesArray.push(content4.value);
	// 				}

	// 				const questionObject = {
	// 					question: content3.value.includes('?') ? content3.value : content3.value + '?',
	// 					choices: choicesArray,

	// 				}
	// 				createPreview(3, questionObject, questionId);
	// 				questionId++;
	// 				modal.style.display = "none";
	// 			}
	// 		});
	// 	}
	// }

	/* the id is declared in the html file and it is called using getElementById('surrveyTitlePreview') */
	surveyTitle.onkeyup = (e) => {
		surveyTitlePreview.textContent = e.target.value;
	};

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
	let ElementText = []; // An array to store placeholders

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
