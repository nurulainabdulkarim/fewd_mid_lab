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
