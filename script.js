function swapTheme(){
	const app = document.getElementById("app");
	const swap = document.getElementById("swap");

	app.classList.toggle("day");
	app.classList.toggle("night");

	swap.classList.toggle("button_day");
	swap.classList.toggle("button_night");
}