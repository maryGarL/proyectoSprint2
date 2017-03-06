//funcion botones
var mostarOcultar = function(elementId) {
  document.getElementById("text1").style.display="none";
  document.getElementById("text2").style.display="none";
  document.getElementById("text3").style.display="none";
  document.getElementById(elementId).style.display="block";
}
//funcion dropdown
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
