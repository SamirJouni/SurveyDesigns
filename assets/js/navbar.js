document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const logo = document.getElementsByClassName('logoWithText')[0];

	logo.addEventListener('click', function(){

		window.location.href= "../../index.html"
	});
});