/* This JS script will create a vertical preview of the survey questions */

function createPreview ( questionType, questionObject, questionId ) {
	'use strict';

	const pRoot = document.getElementById('pRoot');

	if (questionType === 1 ) {
		const content1 = document.createElement('div');
		const content2 = document.createElement('div');
		const content3 = document.createElement('span');
		const content4 = document.createElement('div');
		const content5 = document.createElement('input');
		const contentDelete = document.createElement('img');

		content1.id = String(questionId);
		content1.classList.add('previewQuestion');
		content3.textContent = questionObject.question;
		content5.placeholder = 'Type your answer here';
		content5.style.fontFamily = "'Roboto', sans-serif";
		contentDelete.src = '../svg/crossIcon.svg';
		contentDelete.title = 'Delete from preview (only available for creator)';
		contentDelete.qid = content1.id;

		contentDelete.onclick = () => handleDeleteContent(contentDelete.qid);

		content2.appendChild(content3);
		content4.appendChild(content5);
		content1.appendChild(contentDelete);
		content1.appendChild(content2);
		content1.appendChild(content4);


		pRoot.appendChild(content1);

		togglePlaceholderOnClick();

	} else if (questionType === 2 ) {

		const content1 = document.createElement('div');
		const content2 = document.createElement('div');
		const content3 = document.createElement('span');
		const content4 = document.createElement('div');
		const content5 = document.createElement('select');
		const contentDelete = document.createElement('img');

		content1.id = String(questionId);
		content1.classList.add('previewQuestion');
		content3.textContent = questionObject.question;
		content4.textContent = 'Pick one of the following options ';
		content4.style.fontFamily = "'Roboto', sans-serif";
		contentDelete.src = '../svg/crossIcon.svg';
		contentDelete.title = 'Delete from preview (only available for creator)';
		contentDelete.qid = content1.id;

		content2.appendChild(content3);
		content4.appendChild(content5);
		content1.appendChild(contentDelete);
		content1.appendChild(content2);
		content1.appendChild(content4);

		contentDelete.onclick = () => handleDeleteContent(contentDelete.qid);

		questionObject.options.forEach(
			(option) => {
				const content6 = document.createElement('option');
				content6.textContent = option;
				content6.value = option;
				content5.appendChild(content6);
				content5.style.fontFamily = "'Roboto', sans-serif";
			}
		)

		pRoot.appendChild(content1);

		togglePlaceholderOnClick();

	} else if (questionType === 3) {
		const content1 = document.createElement('div');
		const content2 = document.createElement('div');
		const content3 = document.createElement('div');
		const content4 = document.createElement('div');
		const contentDelete = document.createElement('img');

		content1.id = String(questionId);
		content1.classList.add('previewQuestion');
		content3.textContent = questionObject.question;
		content4.textContent = 'Pick one or more from the choices: ';
		content4.style.fontFamily = "'Roboto', sans-serif";
		content4.classList.add('previewCheckbox');
		contentDelete.src = '../svg/crossIcon.svg';
		contentDelete.title = 'Delete from preview (only available for creator)';
		contentDelete.qid = content1.id;
		content2.appendChild(content3);
		content1.appendChild(contentDelete);
		content1.appendChild(content2);
		content1.appendChild(content4);

		contentDelete.onclick = () => handleDeleteContent(contentDelete.qid);

		questionObject.choices.forEach(
			(choice, i) => {
				const content6 = document.createElement('div');
				const content7 = document.createElement('input');
				content7.type = 'checkbox';
				content7.name = choice;
				content7.value = choice;
				content7.id = choice + i;
				const content8 = document.createElement('label');
				content8.for = choice + i;
				content8.textContent = choice;

				content6.appendChild(content7);
				content6.appendChild(content8);
				content4.appendChild(content6);
			}
		)

		pRoot.appendChild(content1);

		togglePlaceholderOnClick();
	}

	function handleDeleteContent (id) {

		$( document.getElementById(id) ).animate({ height: "0", padding:"0vh 6vw 0vh 2vw"}, 400 );
		setTimeout(after200sec, 380);
		function after200sec(){
			document.getElementById(id).remove();
		}
	}

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
}