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
});

const onBtn = document.querySelector('#on');
const box = document.querySelector('#box');

onBtn.addEventListener('click', ()=>{
    box.style.scale = '1'
});

const div = document.querySelector('.div1').lastChild;
div.textContent = "This added text";

console.log(div)