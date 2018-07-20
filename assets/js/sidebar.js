document.addEventListener('DOMContentLoaded', function () {
	"use strict";
	const allSurveys = document.getElementById('allSurveys');
	const mySurveys = document.getElementById('mySurveys');
	const myAccount = document.getElementById('myAccount');
	const projectRepo = document.getElementById('projectRepo');

	const createSurvey = document.getElementsByClassName('createSurvey')[0];



allSurveys.addEventListener('click', function(){
	if (!createSurvey){
		window.location.href = "allSurveys.html"
}
	else {
		window.location.href = "assets/html/allSurveys.html"
	}
});

});