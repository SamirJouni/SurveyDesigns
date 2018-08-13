/* This is a script that allows the sidebar text to redirect to the right pages */

document.addEventListener('DOMContentLoaded', function () {
	"use strict";
	const allSurveys = document.getElementById('allSurveys');
	const mySurveys = document.getElementById('mySurveys');
	const myAccount = document.getElementById('myAccount');
	const projectRepo = document.getElementById('projectRepo');

	const createSurvey = document.getElementsByClassName('createSurvey')[0];


/* event listener that redirects to a page that displays all surveys that have ever been created,
when the "All Surveys" button in the sidebar is pressed */
allSurveys.addEventListener('click', function(){
	if (!createSurvey){
		window.location.href = "allSurveys.html"
}
	else {
		window.location.href = "assets/html/allSurveys.html"
	}
});

/* event listener that redirects to a page that displays all surveys that the user has created,
when the "My Surveys" button in the sidebar is pressed */
mySurveys.addEventListener('click', function(){
	if (!createSurvey){
		window.location.href = "mySurveys.html"
}
	else {
		window.location.href = "assets/html/mySurveys.html"
	}
});

/* event listener that opens a page that displays user account information allows the user
to edit the info. The page opens when the "My Account" button in the sidbar is pressed */
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