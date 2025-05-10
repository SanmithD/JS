document.querySelector('#para').innerHTML = "Sanmith";

const styleElement = document.querySelector('#style');

const newStyle = styleElement.style.backgroundColor = "red";

const btn = document.querySelector('#btn');

btn.style.backgroundColor = '#3d3d3d';
btn.style.height = '30px';
btn.style.width = '50px';
btn.style.color = 'white';

let bg = 0;

btn.addEventListener('click', ()=>{
    alert("Clicked");
    bg = 1
    btn.style.backgroundColor = "seagreen";
    document.body.style.backgroundColor = "#3d3d3d";
    document.body.style.color = '#fff';
});

const onBtn = document.querySelector('#on');
const box = document.querySelector('#box');

onBtn.addEventListener('click', ()=>{
    box.style.scale = '1'
});

const div = document.querySelector('.div1').lastChild;
div.textContent = "This added text";

console.log(div);

const text = document.querySelector('h1');
const hideBtn = document.querySelector('#hide');

hideBtn.addEventListener('click',()=>{
    hideBtn.style.height = '30px';
    hideBtn.style.width = '60px';
    hideBtn.style.backgroundColor = 'seagreen';
    hideBtn.style.border = 'none';
    hideBtn.style.fondSize = '2rem';
    hideBtn.style.fontWeight = 'bold';
    hideBtn.style.color = '#fff';
    text.style.display = 'none'
});

let div2 = document.querySelector('#div2');

// let text2 = document.body.innerHTML = "Hello there"

// div2.insertAdjacentElement('beforebegin', text2 );

let p1 = document.querySelector('#p1');
p1.style.backgroundColor = 'red';

let parent = p1.parentNode;
parent.style.backgroundColor = 'blue';
parent.style.color = '#fff'
parent.append("New Text");

let newEkem = document.createElement('p');
newEkem.innerHTML = 'Hello';

parent.replaceChild(newEkem, p1);

console.log(p1.getAttribute('id'));
console.log(p1.attributes);

