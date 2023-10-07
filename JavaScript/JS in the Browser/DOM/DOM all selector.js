// DOM Selector for multiple elements with example and explanation

document.getElementsByClassName('className'); //returns HTMLCollection of all elements with class name 'className'

document.getElementsByTagName('tagName'); //returns HTMLCollection of all elements with tag name 'tagName'

document.getElementById('idName'); //returns the element with id 'idName'

document.querySelectorAll('selector'); //returns NodeList of all elements with selector 'selector'

document.querySelector('selector'); //returns the first element with selector 'selector'

// Example
// HTML
// <ul id="list">
//     <li class="item">Item 1</li>
//     <li class="item">Item 2</li>
//     <li class="item">Item 3</li>
//     <li class="item">Item 4</li>
//     <li class="item">Item 5</li>
// </ul>
//
// JavaScript
const list = document.getElementById('list');
console.log(list);
// Output
// <ul id="list">
//     <li class="item">Item 1</li>
//     <li class="item">Item 2</li>
//     <li class="item">Item 3</li>
//     <li class="item">Item 4</li>
//     <li class="item">Item 5</li>
// </ul>
//
// JavaScript
const items = document.getElementsByClassName('item');
console.log(items);
// Output
// HTMLCollection(5) [li.item, li.item, li.item, li.item, li.item]
// 0: li.item
// 1: li.item
// 2: li.item
// 3: li.item
// 4: li.item
// length: 5
// __proto__: HTMLCollection
//
// JavaScript
const items = document.getElementsByTagName('li');
console.log(items);
// Output
// HTMLCollection(5) [li.item, li.item, li.item, li.item, li.item]
// 0: li.item
// 1: li.item
// 2: li.item
// 3: li.item
// 4: li.item
// length: 5
// __proto__: HTMLCollection
//
// JavaScript
const items = document.querySelectorAll('.item');
console.log(items);
// Output
// NodeList(5) [li.item, li.item, li.item, li.item, li.item]
// 0: li.item
// 1: li.item
// 2: li.item
// 3: li.item
// 4: li.item
// length: 5
// __proto__: NodeList
//
// JavaScript
const item = document.querySelector('.item');
console.log(item);
// Output
// <li class="item">Item 1</li>
//
// JavaScript
const item = document.querySelector('#list');
console.log(item);
// Output
// <ul id="list">
//     <li class="item">Item 1</li>
//     <li class="item">Item 2</li>
//     <li class="item">Item 3</li>
//     <li class="item">Item 4</li>
//     <li class="item">Item 5</li>
// </ul>
//
// JavaScript

