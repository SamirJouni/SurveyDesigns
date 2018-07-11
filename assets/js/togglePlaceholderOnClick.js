/*
  This function removes the placeholder of an input field when it is in focus, saves it, and then
  restores it when the input field is no longer in focus.

  This function accepts no values and works on its own without any intervention.
  It is possible to extend the functionality to have the same effect for textfields
  and other elements that have placeholders. To do that, the name of the element should
  be added to the querySelectorAll('input') function in line 18. An example of extending it for
  textareas would be the following:

  querySelectorAll('input, textarea')

*/

document.addEventListener('DOMContentLoaded', function(){
  "use strict";

  const Elements = Array.from(document.querySelectorAll('input'));
  var ElementText = []; // An array to store placeholders

  Elements.forEach(function(element){
    ElementText.push(element.placeholder); // pushing placeholders into the empty array

    element.addEventListener("focusin", function (event) { // Event listener when element is in focus
      element.placeholder = ""; // setting placeholder to nothing

    });

    element.addEventListener("focusout", function (event) { // Event listener on when element is not in focus
      if (!element.value){
        element.placeholder = ElementText[Elements.indexOf(element)]; // retrieving old placeholder and setting it
      }

    });
  });
});
