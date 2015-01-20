// you can use JavaScript with the CSS styles that define the presentation of content
// this is often done with the style or class attribute of HTML elements:
function hide(e, reflow) { // Hide the element e bt scripting its style
	if (reflow) {						// If 2nd argument is true
		e.style.display = "none"		// hide element and use its space
	}
	else {								// Otherwsie
		e.style.visibility = "hidden";	// make e invisible, but leave its space
	}
}