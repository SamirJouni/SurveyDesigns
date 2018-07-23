/* This is a script that allows the sidebar text to redirect to the right pages */

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

mySurveys.addEventListener('click', function(){
	if (!createSurvey){
		window.location.href = "mySurveys.html"
}
	else {
		window.location.href = "assets/html/mySurveys.html"
	}
});

myAccount.addEventListener('click', function(){
	if (!createSurvey){
		window.location.href = "myAccount.html"
}
	else {
		window.location.href = "assets/html/myAccount.html"
	}
});

projectRepo.addEventListener('click', function(){
		window.location.href = "https://github.com/zero-to-mastery/TheVerySpecialProject"
});

});