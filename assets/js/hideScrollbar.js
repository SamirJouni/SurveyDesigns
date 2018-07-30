/* This is a script to hide the scrollbar of the surveys list */

document.addEventListener('DOMContentLoaded', function () {
	"use strict";
	const parent = document.getElementsByClassName('contentAndTitles')[0];
	const child = document.getElementsByClassName('surveyList')[0];

	child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";
	child.style.paddingBottom = child.offsetHeight - child.clientHeight + "px";

});