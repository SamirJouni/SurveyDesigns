document.addEventListener('DOMContentLoaded', function(event) {
  "use strict";

  /* Smooth Scroll To Events Section */
  const eventsTrigger = document.getElementById('eventsTrigger');
  const destination = document.getElementById('EVENTS');
  eventsTrigger.addEventListener('click', function(event) {
    event.preventDefault();
    smoothScrollTo(destination);
  });

  /* Detect if Mouse if Over The Visit Website Link */
  const websites = Array.from(document.querySelectorAll('.website'));
  var mouseOverWebsite = false;

  websites.forEach(function(website){

    website.addEventListener('mouseover', function() {
      mouseOverWebsite = true;
    });
    website.addEventListener('mouseout', function () {
      mouseOverWebsite = false;
    });
  });
  /* Detect if Mouse if Over Sign Up Button */
  const signUpButton = Array.from(document.querySelectorAll('.signUpButton'));
  var mouseOverButton = false;

  signUpButton.forEach(function(button){

    button.addEventListener('mouseover', function() {
      mouseOverButton = true;
    });
    button.addEventListener('mouseout', function () {
      mouseOverButton = false;
    });

    /* Sign Up Button Redirect On Click */
    button.addEventListener('click', function () {

      /* Sign Up Button Animation*/
      button.classList.add('zoomInOut');
      setTimeout(function() {
        button.classList.remove('zoomInOut');
      }, 300);

      setTimeout(function(){
        window.location.href =
          'http://iasc-culture.us11.list-manage.com/subscribe/post?u=0bd38571820ea697cfb101c21&id=618afc487a';
      }, 400);
    });

  });
  /* Event Animation */
  const events = Array.from(document.getElementsByClassName('event'));
  var clickedEvent = 0;

  events.forEach(function(event) {
    event.addEventListener('click', function() {
      if (!mouseOverButton && !mouseOverWebsite) {
        event.classList.add('zoomInOut', 'transparent');
        setTimeout(function() {
          event.classList.remove('zoomInOut', 'transparent');
        }, 300);

        clickedEvent = document.getElementById('event' + events.indexOf(event));

        /* Expand Event */
        setTimeout(function() {
          const eventExpandedElements = Array.from(clickedEvent.querySelectorAll ('.dontDisplayInitially'));
          const eventElementsToHide = Array.from(clickedEvent.querySelectorAll ('.hideOnExpand'));
          const eventTitle = Array.from(clickedEvent.querySelectorAll ('.eventTitle'));
          const eventImage = Array.from(clickedEvent.querySelectorAll ('.eventImage'));

          eventExpandedElements.forEach(function (element) {
              element.classList.toggle('dontDisplay');
          });
          eventElementsToHide.forEach(function (element) {
              element.classList.toggle('dontDisplay');
          });
          eventTitle.forEach(function (element) {
              element.classList.toggle('eventTitleExpanded');
          });
          eventImage.forEach(function (element) {
              element.classList.toggle('eventImageExpanded');
          });
        }, 300);
      }
    });
  });
});
