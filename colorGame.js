
let numSquares = 6
let colors = generateRandomColors(numSquares)
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor()
let pickedColor = colors[3];
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message")

let h1 = document.querySelector("h1")
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function()){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickColor = pickColor();
	colorDisplay,textContent = pickedColor;

	for(let i =0, i < squares.length;  i++){

		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display ="none";
		}
	}

}

hardBtn.addEventListener("click",function()){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickColor = pickColor();
	colorDisplay,textContent = pickedColor;

	for(let i =0, i < squares.length;  i++){

		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display ="black";
		}
	}

}

resetbutton.addEventListener("click",function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pic

})

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		let clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent="correct!";
			changeColors(Color);

			alert("Correct!");
		} else {
			this.style.background="#232323";
			messageDisplay.textContent="try again";


		}
	});
}

function changeColors(color){
	// loop through all squares

	for(let i =0; i < squares.length; i++){
		// change earch color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	let random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	let arr = [];
	for (let i=0,i<num; i++){
		arr.push(randomColor());
		return arr;
	}

function randomColor(){
	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}



}
