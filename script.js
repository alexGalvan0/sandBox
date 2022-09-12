const body = document.body
let div = document.createElement('div');
let h1 = document.createElement('h1');

div.appendChild(h1)
h1.textContent = 'Hello World'
h1.setAttribute('value',20);

body.appendChild(div)