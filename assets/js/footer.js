/* This is a script for the footer links of the ztm community */

document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const bottomText = document.getElementsByClassName('bottomText')[0];
	const ztmLogo = document.getElementsByClassName('ztmLogo')[0];

	/* go to zero to mastery organization on github, when the community logo, or the text below it are clicked */
	bottomText.addEventListener('click', goToZTM);
	ztmLogo.addEventListener('click', goToZTM);
});