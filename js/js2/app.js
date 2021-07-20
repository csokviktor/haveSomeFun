/*
const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myInput = document.getElementById('myInput');

myButton.addEventListener('click', () => {
    myHeading.style.color = myInput.value;
});
*/

const mylist = document.getElementsByTagName('li');

for(let i = 0; i < mylist.length; i++){
    mylist[i].style.color = 'purple'
}

const evens = document.querySelectorAll('li:nth-child(even)');
for(let i = 0; i < mylist.length; i++){
    evens[i].style.background = 'black';
}