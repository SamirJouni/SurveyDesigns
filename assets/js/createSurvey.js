/* This script controls the seperate interactions for the survey creation on Create A Survey section */

document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const modal = document.getElementById('accountModal');
	const buttons = document.getElementsByClassName('addAQuestion');
	const dropdown = document.getElementsByClassName('dropdown');
	const close = document.getElementById('closeModal');
	const modalTextContent = document.getElementById('modalTextContent');
	const surveyTitle = document.getElementById('surveyTitle');
	const surveyTitlePreview = document.getElementById('surveyTitlePreview');

	let questionId = 0;
	let firstClick = [true,true,true];

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function (button) {
			openButtonSpecificDropdown(button.target.id);
		});
	}

	function openButtonSpecificDropdown(buttonId) {

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
				let wordCounter = 100;
				currentdropdown.appendChild(content1);
				currentdropdown.appendChild(content2);
				currentdropdown.appendChild(content4);

				currentdropdown.style.paddingLeft = "8vw";

				currentdropdown.children[0].style.fontStyle = "italic";

				countHolder(currentdropdown.children[2], wordCounter);

				// desinging & limiting the number of words using wordCounter  
				questionInput(currentdropdown.children[1], wordCounter, currentdropdown.children[2], buttons[buttonId[1]], content3);
				
				// run when enter is pressed inside the input field
				currentdropdown.children[1].addEventListener("keyup", function(e) {
					if(e.keyCode == '13' && $( currentdropdown.children[1] ).is(':valid') && this.value.length) saveThisQuestion();
				});
				// input value is changed
				
				// When the Done button is pressed
				content3.addEventListener('click', function() {
					saveThisQuestion();
				});
				function saveThisQuestion(){
					if (content2.value) {
						const questionObject = {
							question: content2.value.includes('?') ? content2.value : content2.value + '?',
						}
						createPreview(1, questionObject, questionId);
						questionId++;
					}
					closeAll(buttonId[1], buttonId[1]);
				}
			}
			firstClick[0] = false;
			firstClick[1] = true;
			firstClick[2] = true;
		} else if (buttonId[1] === '1' && firstClick[1]) {
			closeAll(0, buttonId[1]);
			closeAll(2, buttonId[1]);
			
			const currentdropdown = dropdown[buttonId[1]];
			
			$( currentdropdown ).animate({ height: "20vh" }, 200 );
			if(currentdropdown.children.length === 0) {
				const content1 = document.createElement('label');	// questionCount	// Q1:
				const content2 = document.createElement('input');	// input the question here
				const content3 = document.createElement('div');		// doneButton
				const content4 = document.createElement('label');	// wordCounter
				const content5 = document.createElement('br');		// breaks the line between question and option
				const content6 = document.createElement('ol');		// first necessary option
				const li = document.createElement('li');

				content1.textContent = "Q" + (questionId + 1) + ": ";
				content2.placeholder = "Enter your question here";
				content3.textContent = "✔";
				content6.type = "i";

				currentdropdown.appendChild(content1);
				currentdropdown.appendChild(content2);
				currentdropdown.appendChild(content4);
				currentdropdown.appendChild(content5);
				currentdropdown.appendChild(content6);
				content6.appendChild(li);
				li.appendChild(document.createTextNode('Hello'));
				currentdropdown.appendChild(content5);
				li.appendChild(document.createTextNode('World'));
				let wordCounter = 100;

				currentdropdown.style.paddingLeft = "8vw";

				currentdropdown.children[0].style.fontStyle = "italic";

				// brings the countholder view
				countHolder(currentdropdown.children[2], wordCounter);

				// desinging & limiting the number of words using wordCounter  
				questionInput(currentdropdown.children[1], wordCounter, currentdropdown.children[2], buttons[buttonId[1]], content3);
				// desing the option input box
				optionInput(currentdropdown.children[4]);
				function optionInput(option){
					const optionStyle = option.style;
					optionStyle.backgroundColor = "#f1f2f3";
					optionStyle.border = "0";
					optionStyle.borderRadius = "2.4vh";
					optionStyle.color = "#555";
					optionStyle.fontFamily = "'Montserrat',sans-serif";
					optionStyle.height = "4vh";
					optionStyle.marginLeft = "3vw";
					optionStyle.marginTop = "2vh";
					optionStyle.marginRight = "4.3vw";
					optionStyle.paddingLeft = "1vw";
					optionStyle.paddingRight = "3vw";
					option.minLength = "1";
				}
				
				// run when enter is pressed inside the input field
				currentdropdown.children[1].addEventListener("keyup", function(e) {
					if(e.keyCode == '13' && $( currentdropdown.children[1] ).is(':valid') && this.value.length) saveThisQuestion();
				});
				
				// When the Done button is pressed
				content3.addEventListener('click', function() {
					saveThisQuestion();
				});
				function saveThisQuestion(){
					if (content2.value) {
						const questionObject = {
							question: content2.value.includes('?') ? content2.value : content2.value + '?',
						}
						createPreview(1, questionObject, questionId);
						questionId++;
					}
					closeAll(buttonId[1], buttonId[1]);
				}
			}
			firstClick[0] = true;
			firstClick[1] = false;
			firstClick[2] = true;
		} else if (buttonId[1] === '2' && firstClick[2]) {
			closeAll(0, buttonId[1]);
			closeAll(1, buttonId[1]);
			console.log('first ran');
			const currentdropdown = dropdown[buttonId[1]];
			
			$( currentdropdown ).animate({ height: "12vh" }, 200 );
			if(currentdropdown.children.length === 0) {
				const content1 = document.createElement('label');	// questionCount	// Q1:
				const content2 = document.createElement('input');	// input the question here
				const content3 = document.createElement('div');		// doneButton
				const content4 = document.createElement('label');	// wordCounter
				const LastLine = document.createElement('hr');

				content1.textContent = "Q" + (questionId + 1) + ": ";
				content2.placeholder = "Enter your question here";
				content3.textContent = "✔";

				currentdropdown.appendChild(content1);
				currentdropdown.appendChild(content2);
				currentdropdown.appendChild(content4);
				currentdropdown.appendChild(LastLine);
				LastLine.style.border = "none";
				LastLine.style.height = "0.2vh";
				LastLine.style.background = "linear-gradient(to left,white,#61d800)"; 
				LastLine.style.marginLeft = "-6vw";
				LastLine.style.marginRight = "2vw";
				LastLine.style.marginTop = "5vh";
				let wordCounter = 100;

				currentdropdown.style.paddingLeft = "8vw";

				currentdropdown.children[0].style.fontStyle = "italic";

				// brings the countholder view
				countHolder(currentdropdown.children[2], wordCounter);

				// desinging & limiting the number of words using wordCounter  
				questionInput(currentdropdown.children[1], wordCounter, currentdropdown.children[2], buttons[buttonId[1]], content3);
				// desing the option input box
				
				// run when enter is pressed inside the input field
				currentdropdown.children[1].addEventListener("keyup", function(e) {
					if(e.keyCode == '13' && $( currentdropdown.children[1] ).is(':valid') && this.value.length) saveThisQuestion();
				});
				
				// When the Done button is pressed
				content3.addEventListener('click', function() {
					saveThisQuestion();
				});
				function saveThisQuestion(){
					if (content2.value) {
						const questionObject = {
							question: content2.value.includes('?') ? content2.value : content2.value + '?',
						}
						createPreview(1, questionObject, questionId);
						questionId++;
					}
					closeAll(buttonId[1], buttonId[1]);
				}
			}
			firstClick[0] = true;
			firstClick[1] = true;
			firstClick[2] = false;
		}
		else {
			for (i = 0; i < firstClick.length; i++){
				closeAll(i, i);
			}
		}
	}
	function viewDone(doneButton, thisButton){
		thisButton.appendChild(doneButton);
		doneButton.style.boxShadow = "0 0 0.3vw 0 #ddd";
		doneButton.style.padding = "0.2vw 0.6vw";
		doneButton.style.position = "absolute";
		doneButton.style.marginLeft = "24.4vw";
		doneButton.style.top = "0.6vw";
		doneButton.style.borderRadius = "1.2vw";
		doneButton.style.fontSize = "1.5vw";
		doneButton.style.color = "#77bb00";
	}
	 // a is the dropdown which needs to be closed and b is the button which is clicked
	 // firstClick false means that the dropdown is open
	function closeAll(a, b) {
		const d = dropdown[a];
		$( d ).animate({ height: "0" }, 200 );
		setTimeout(ontimeout, 250);
		function ontimeout() {
			while (d.firstChild) {
				d.removeChild(d.firstChild);
			}
		}
		if (buttons[a].lastChild.textContent === '✔') {
			buttons[a].removeChild(buttons[a].lastChild);
		}
		firstClick[b] = true;
	}
	
	function questionInput(input, wordCounter, countHolder, thisButton, doneButton){
		const inputStyle = input.style;
		let previousLength = 0;
		let lastChar = "";
		inputStyle.backgroundColor = "#f1f2f3";
		inputStyle.border = "0";
		inputStyle.borderRadius = "2.4vh";
		inputStyle.color = "#555";
		inputStyle.fontFamily = "'Montserrat',sans-serif";
		inputStyle.height = "4vh";
		inputStyle.marginLeft = "1vw";
		inputStyle.marginRight = "4.3vw";
		inputStyle.paddingLeft = "1vw";
		inputStyle.paddingRight = "3vw";
		input.minLength = "10";
		input.addEventListener('focus', inFocus);
		input.addEventListener('focusout', outFocus);
		function inFocus() {
			inputStyle.backgroundColor = "#fff";
				inputStyle.border = ".15vw solid #ddd";
			}
			function outFocus() {
				inputStyle.backgroundColor = "#f1f2f3";
				inputStyle.border = ".15vw solid #f1f2f3";
			}
			$(input).focus();
			// children[1] is for input box inside the dropdown
			input.title = "minimum character length of a question should be " + input.minLength;
			input.size = "30";
			// won't accept any more letter when the word count is 0
			$( input ).on('keydown keyup', function(e){
			    if (wordCounter === 0
			        	&& e.keyCode !== 46 // keycode for delete
			        	&& e.keyCode !== 8 // keycode for backspace
			       ) {
			       e.preventDefault();
			    }
			});
			input.addEventListener("input", onChange);
			function onChange(value) {
				// this.value.length is current length of the input text
				// if previous character before delete was " " then if previous length is smaller than current length then a word is added
				if (lastChar === " ") (previousLength < this.value.length) ? wordCounter-- : wordCounter++;
				
				if(Math.abs(previousLength - this.value.length) > 1) {
					wordCounter = 100;
					for(var i = 0; i < this.value.length; i++) if (this.value[i] === " ") wordCounter--;
				}
				setCountHolderWarning(wordCounter, "valid", countHolder.style)
				countHolder.textContent = wordCounter;

				previousLength = this.value.length;
				lastChar = this.value.slice(-1);

				// have to reassign the size because when the text inside the input box is again less than 10 
				// then it have to make the done button transparent
				input.size = "30";
				// if the input text is valid and non-zero length then run this block
				// had to give the non-zero block because without it the input was showing valid at zero length also (maybe some bug)
				if($(input).is(':valid') && this.value.length) {
					// input.border = ".15vw solid #bfeac2";//green color borderBottom
					// add the done button with some styling // the styling is done in the viewDoen function itself
					viewDone(doneButton, thisButton);
					// if the functin has this many characters then keep incrementing the size of the input box
					if (this.value.length > 0 && this.value.length < 59)
						input.size = this.value.length + 21;
					// otherwise fix the size to 80
					// 80 is the size of the input block at 50 characters, so it won't show any flick while changing the size
					else 
						input.size = 80;
				} 
				// if the input text is not valid
				else {
					input.border = ".15vw solid #ddd";// dark-grey color
					// remove the lastchild (done button) // when the lastChild has the text inside it 'Done'
					if(thisButton.lastChild.textContent === doneButton.textContent) {
						thisButton.removeChild(thisButton.lastChild);
					}
				}
			}
		}

		function countHolder(countHolder, wordCounter){
			countHolder.textContent = "100";
			const countHolderStyle = countHolder.style;
			countHolderStyle.padding = "0.4vw 0.8vw 0 0.8vw";
			countHolderStyle.height = "1.6vw";
			countHolderStyle.borderRadius = "1.4vw";
			countHolderStyle.position = "absolute";
			countHolderStyle.left = "3vw";
			countHolderStyle.top = "0.2vw";
			countHolderStyle.opacity = "0.5";
			countHolderStyle.boxShadow = "0 0 0.2vw 0 #ddd";
			countHolderStyle.color = "#61d800";
			countHolderStyle.transition = "0.2s all";
			countHolder.title = "Maximum number of words";

			countHolder.addEventListener('mouseenter', inCountEnter);
			countHolder.addEventListener('mouseout', inCountOver);
			
			function inCountEnter() {
				setCountHolderWarning(wordCounter, 'mouseenter', countHolderStyle);
			}
			function inCountOver() {
				setCountHolderWarning(wordCounter, 'mouseout', countHolderStyle);
			}
		}
		function setCountHolderWarning(wordCounter, CASE, countHolderStyle){
			if(wordCounter > 12){
				switch (CASE){
					case "mouseenter":
						countHolderStyle.opacity = "1";
						countHolderStyle.boxShadow = "0 0 0.5vw 0 #ddd";
					break;
					case "mouseout":
						countHolderStyle.opacity = "0.5";
						countHolderStyle.boxShadow = "0 0 0.2vw 0 #ddd";
					break;
					case "valid":
						countHolderStyle.opacity = "0.5";
						countHolderStyle.boxShadow = "0 0 0.2vw 0 #ddd";
						countHolderStyle.color = "#61d800";
					break;
				}
			}else {
				countHolderStyle.opacity = "1";
				countHolderStyle.boxShadow = "0 0 0.5vw 0 #ddd";
				countHolderStyle.color = "#ff7f7f";
			}
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
