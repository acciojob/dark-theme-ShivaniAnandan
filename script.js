//your code here
function swapTheme(){
	const toggle = "true";
	if(toggle){
		document.getElementById("app").classList.add("night");
		document.getElementById("swap").classList.add("button_night");
		toggle="false"
	}
	else{
		document.getElementById("app").classList.remove("night");
		document.getElementById("swap").classList.remove("button_night");
	}
}
