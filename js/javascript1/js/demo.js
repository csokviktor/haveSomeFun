function getRandom(){
    const randomNum = Math.floor(Math.random() * 6) + 1;
    return randomNum;
}

//arrow function
const getRandomNumber = (upper) => {
    return randomNum = Math.floor(Math.random() * upper) + 1;
}

//if statement
function isFieldEmpy(){
    const field = document.querySelector('#info');
    if(!field.value){
        return true;
    } else{
        return false;
    }

}

//log
function sayGreeting(name = "Sanyi"){
    console.log(name)
}

/* loop object
const student = {
    name: "Viktor",
    city: 'Budapest',
    age: 23,
    isStudent: true,
    skills: ['python', 'javascript']
};

for (let prop in student){
    console.log(student[prop])
}
*/


//arrays

const planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars'
];
const otherPlanets = ['Pluto', ...planets, 'Mars']; //spread
planets.push('Pluto'); //pop
planets.unshift('Mars'); //shift

function createListItems(arr){
    let items = '';
    for(let i=0; i<arr.length; i++){
        items += `<li>${arr[i]}</li>`
    }
    return items;
}

document.querySelector('main').innerHTML = `<ol>${createListItems(planets)}</ol>`;
