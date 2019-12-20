// Burger Menu Animation
let burger = document.getElementById("burger-btn");
burger.onclick = burgerClick;
let burgerIsClosed = true;

function burgerClick(){
	let btop = document.getElementById("burger-top");
	let bbot = document.getElementById("burger-bot");

	if ( burgerIsClosed ) {
	    
		btop.style.transform = "rotate(45deg) translateY(10px)";
		bbot.style.transform = "rotate(-45deg) translateY(-10px)";
		bbot.style.width = "40px";

        burgerIsClosed = false;

	} else {

		btop.style.transform = "rotate(0deg) translateY(0px)";
		bbot.style.transform = "rotate(0deg) translateY(0px)";
		bbot.style.width = "23px";

        burgerIsClosed = true;
	
	}	
}
