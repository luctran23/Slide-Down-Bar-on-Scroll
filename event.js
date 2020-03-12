window.addEventListener('scroll', showTheBar);

function showTheBar() {
	if(window.pageYOffset > 20 ) {
		document.getElementsByClassName('slide-down-bar')[0].style.top = "0";
	} else {
		document.getElementsByClassName('slide-down-bar')[0].style.top = "-80px";
	}
}