let btn = document.querySelector('#btn');
let name = document.querySelector('.name');
let form = document.querySelector('form');

const fun = () =>{
    alert("Clicked again")
}

btn.addEventListener('click',fun);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    alert(name.value)

});

window.addEventListener('scroll',()=>{
    alert("Hello")
});

