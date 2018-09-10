/* This is a script that redirects the user to the homepage if the icon in the navbar is clicked */
document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const logo = document.getElementsByClassName('logoWithText')[0];

	/* Take user to homepage when the logo in the left corner of the navbar is clicked */
	logo.addEventListener('click', function(){

		window.location.href= "../../index.html"
	});
});