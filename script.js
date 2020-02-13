var title = document.querySelector('title');
var h1 = document.querySelector('h1');
var p = document.querySelectorAll('p');
h1.innerText = title.innerText;
h1.classList.add('classy');
var i;
for (i = 0; i < p.length; i++) {
  p[i].classList.add('paragraaf');
}