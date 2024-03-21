console.log("Conditionals");
if (5 > 3) {
    console.log("5 is more than 3");
}

let myAge = 33;

if (myAge === 33) {
    console.log("Well done for making it");
} else if (myAge === 18) {
    console.log("You're still young");
} else {
    console.log("Sorry, I dont know your age");
}

// myAge === 33 //value and data type
// myAge == 33 // value

//Practical examples


//a simple dark and light theme
let themeAnswer = prompt("Do you prefer white or black theme?");

if (themeAnswer === "white") {
    document.body.style.backgroundColor = themeAnswer;
} else if (themeAnswer === "black") {
    document.body.style.backgroundColor = themeAnswer;
}

//prompt("What is your name?");
//alert("Careful");

const button = document.querySelector("button");
//the user clicks the button
//our js listens to event
//then action happens

button.addEventListener("click", function(){
    console.log("Button clicks");
});

//button to add 1


const counterButton = document.getElementById
let count = 0;
counterButton.addEventListener("click", function() {
    console.log((count += 1));
    counterButton.textContent = 'Clicks: ${count}' ;
});

//'${} template literal


