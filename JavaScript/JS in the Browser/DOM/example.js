//DOM Manupulation
//try this in broweser console

const h2 = document.createElement('h2');
h2.innerText = 'I am a h2';
h2.setAttribute('id','sub-heading');

h2.setAttribute('class','secondary');

console.log(h2);

document.body.appendChild(h2);