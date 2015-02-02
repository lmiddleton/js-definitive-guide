function highlight(e) { // Highlight e by setting a CSS class
	// Simply define or append to the HTML class attribute.
	// This assumes that a CSS stylesheet already defines the "hilite" class
	if (!e.className) e.className = "hilite";
	else e.className += " hilite";
}