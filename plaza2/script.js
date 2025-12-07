const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');
const resetButton = document.getElementById('resetButton');
const addParagraphButton = document.getElementById('addParagraphButton');
const paragraphContainer = document.getElementById('paragraphContainer');
const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const usernameInput = document.getElementById('username');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');
const alertButton = document.getElementById('alertButton');



menuButton.addEventListener('click', function () {
	if(menu.style.display === 'none') {
		menu.style.display = 'block';
	} else {
		menu.style.display = 'none';
	}
});



// paragraph button//
addParagraphButton.addEventListener('click', function() {
	const newParagraph = document.createElement('p');
	newParagraph.textContent = 'congratulation on learning Practical JavaScript!';
	paragraphContainer.appendChild(newParagraph)
});
//paragraph end//


//show alert button//

alertButton.addEventListener('click', function(){
    alert('Hello This is an alert message');
});



// increment & decreement button//
let counter = 0;

incrementButton.addEventListener('click', function () {
	counter += 1;
	counterDisplay.textContent = counter;
});


decrementButton.addEventListener('click', function () {
	counter -=1;
	counterDisplay.textContent = counter;
})


// reset button//
resetButton.addEventListener('click', function (){
	location.reload();
});


//increment decrement button end//





//form input//

function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name);
}

greetButton.addEventListener('click' , function (){
    const username = usernameInput.value.trim();

    if (username === '') {
        greetingMessage.textContent = 'Please Enter your Name.';
    }else if (!isValidName(username)) {
        greetingMessage.textContent = 'Invalid input. Please use only letters.';
    }else {
        greetingMessage.textContent = `hello, ${username}!`;
    }
});