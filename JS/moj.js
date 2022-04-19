// Bombelkowanie
const lime = document.querySelector(".lime");
const blue = document.querySelector(".blue");
const gold = document.querySelector(".gold");
const oragne = document.querySelector(".orange");
const black = document.querySelector(".black");

const limeOne = () => {
	console.log("%clime", "color: lime; text-transform: uppercase;");
};
const blueOne = () => {
	console.log("%cblue", "color: blue; text-transform: uppercase;");
};
// Propagacja
const goldOne = (e) => {
	e.stopPropagation();
	console.log(
		"%cgold tutaj wykona się tylko gold",
		"color: gold; text-transform: uppercase;"
	);
};
const orangeOne = () => {
	console.log("%coragne", "color: orange; text-transform: uppercase;");
};
const blackOne = () => {
	console.log("%cblack", "color:black; text-transform: uppercase;");
};

lime.addEventListener("click", limeOne);
blue.addEventListener("click", blueOne);
gold.addEventListener("click", goldOne);
// Przechwytywanie
oragne.addEventListener("click", orangeOne, { capture: true });
black.addEventListener("click", blackOne, { capture: true });
