/* This is a script that redirects the user to the homepage if the icon in the navbar is clicked */
document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const logo = document.getElementsByClassName('logoWithText')[0];

	logo.addEventListener('click', function(){

		window.location.href= "../../index.html"
	});
});