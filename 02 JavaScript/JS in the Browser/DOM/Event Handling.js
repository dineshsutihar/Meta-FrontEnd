//Event Listeners
//Event listeners are functions that will be called when a certain event happens.
//The addEventListener method is used to register an event listener on the document.
//The first argument is the event type and the second argument is the event handler.
//The event handler is a function that will be called when the event happens.
//The event handler function will be called with an event object.
//The event object contains information about the event.
//The event object has a target property that contains the element that triggered the event.

// Example
// HTML
// <button id="btn">Click Me</button>
// //
// // JavaScript
// const btn = document.getElementById('btn');
// btn.addEventListener('click', function(event) {
//     console.log(event);
// });
// // Output
// // MouseEvent {isTrusted: true, screenX: 0, screenY: 0, clientX: 0, clientY: 0, …}
// // altKey: false
// // bubbles: true
// // button: 0
// // buttons: 0
// // cancelBubble: false
// // cancelable: true
// // clientX: 0
// // clientY: 0
// // composed: true

// Example
// HTML
// <h1 onclick="handleClick()">Click Me</h1>
// //
// // JavaScript
// function handleClick(event) {
//     console.log(event);
// }
// // Output
// // MouseEvent {isTrusted: true, screenX: 0, screenY: 0, clientX: 0, clientY: 0, …}
// // altKey: false
// // bubbles: true
// // button: 0
// // buttons: 0


// Example
// HTML
