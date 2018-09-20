/* This is a script that allows the sidebar text to redirect to the right pages */
document.addEventListener('DOMContentLoaded', function () {
	"use strict";
	const allSurveys = document.getElementById('allSurveys');
	const mySurveys = document.getElementById('mySurveys');
	const myAccount = document.getElementById('myAccount');
	const projectRepo = document.getElementById('projectRepo');
	const newSurvey = document.getElementById('createSurvey');

	const createSurvey = document.getElementsByClassName('createSurvey')[0];
	console.log(createSurvey);

/* event listener that redirects to a page that displays all surveys that have ever been created,
when the "All Surveys" button in the sidebar is pressed */
allSurveys.addEventListener('click', function(){
	console.log(allSurveys)
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

/* event listener that opens the create Survey page that allows a user to create a new survey.
The page opens when the "Create Survey" button in the sidebar is pressed */
newSurvey.addEventListener('click', function(){
	if (!createSurvey){
		window.location.href = "createSurvey.html"
}
	else {
		window.location.href = "assets/html/createSurvey.html"
	}
});

/* event listener that opens the page of the repo of this project when the github logo
is pressed */
projectRepo.addEventListener('click', function(){
		window.location.href = "https://github.com/zero-to-mastery/TheVerySpecialProject"
});

// change the color of the active links and inactive links
function setColor(link1,link2,link3,link4){
	link1.classList.toggle('active-link');
	link2.classList.toggle('inactive-link');
	link3.classList.toggle('inactive-link');
	link4.classList.toggle('inactive-link');
}
// function to check which page the user is on, to color the link for the active page.
function checkLinks(){
	if(window.location.href.indexOf('allSurveys') !== -1 ){
		setColor(allSurveys,myAccount,mySurveys,newSurvey);
	}
	if(window.location.href.indexOf('mySurveys') !== -1 ){
		setColor(mySurveys,myAccount,allSurveys,newSurvey);
	}
	if(window.location.href.indexOf('myAccount') !== -1 ){
		setColor(myAccount,mySurveys,allSurveys,newSurvey);
	}
	if(window.location.href.indexOf('createSurvey') !== -1 ){
		setColor(newSurvey,myAccount,allSurveys,mySurveys);
	}
}

checkLinks();
});
