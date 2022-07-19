function collapseIconSwap() {
	var crossIcon = document.getElementById("crossIcon");
	var hamburgerIcon = document.getElementById("hamburgerIcons");
	if (hamburgerIcon.style.display == "block") {
		hamburgerIcon.style.display="none";
		crossIcon.style.display="block";
	}
	else {
		crossIcon.style.display="none";
		hamburgerIcon.style.display="block";
	}
}