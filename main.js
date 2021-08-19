let modal = document.querySelector(".modal");
let openModal = document.querySelector(".btn");
let closeModal = document.querySelector(".close");
let closeContinue = document.querySelector(".continue_btn");


//Listen for open click
document.querySelector(".btn").addEventListener('click', open);

//Function for open click
function open() {
    modal.style.display = "block"
}

//Listen for close click
document.querySelector(".close").addEventListener('click', close);

//Function for close click
function close() {
    modal.style.display = "none"
}

//Listen for continue button click
document.querySelector(".continue_btn").addEventListener('click', ctn);

//Function for close click
function ctn() {
    modal.style.display = "none"
}

//Listen if the cursor click at the window
window.addEventListener('click', close2);

//Function for close click at the window
function close2(a){
    if (a.target == modal){
        modal.style.display = 'none';
    }
}

// ---------------------HOMEWORK START HERE-----------------------
// * Easiest
// * 1) Get the title for each dog/cat services, and put them into the console using console.log
document.querySelector(".header1");
console.log("Dog services")

// * 2) Change the title of the page to "We're the CAT People"
document.querySelector(".catpeople").innerHTML ="We're The Cat People";

// * 3) Change the main image to be something cat related.

let image_tracker = 'dog'
function cat(){
    var image = document.querySelector(".myImg");
    // image.src = "img/cat and woman.jpg"
    if (image_tracker =='dog'){
        image.src = "img/cat and woman.jpg";
        image_tracker ='cat'
    }else{
        image.src = "img/hero.jpg";
        image_tracker ='dog'
    }
}
    
// * 
// * 
// * Harder
// * 1) Replace the call to action button background color with "red"
 let bookbutton = document.querySelector(".btn2")
 bookbutton.addEventListener('click', () => bookbutton.style.backgroundColor='red')

// * 2) Find another image and replace the header (try unsplash.com, get familiar with searching for images)
// * 3) When someone clicks the "Book your next Rover sitter" button, change the text of the button to say "Thanks"
// * 
// * 
// * Hardest (only if you get the others first)
// * 1) Make the responsive menu work!
// * 2) Implement a modal window - "Sign up now" CTA when someone clicks the 'Sign Up' button



// src="img/cat and woman.jpg"