/*
- use JS to script content (HTML), presentation (CSS), and behavior (event handling) of web pages

- many client-side JS programmers choose to use a client-side library or framework to simplify basic programming tasks

- most popular library is jQuery
*/

// debug() function rewritten to use jQuery
function debug(msg) {
	var log = $("#debuglog");			// Find the element to display msg in.
	if (log.length == 0) {				// If it doesn't exist yet, create it...
		log = $("<div id='debuglog'><h1>Debug Log</h1></div>");
		log.appendTo(document.body);	// and insert it at the end of the body.
	}
	log.append($("<pre/>").text(msg));	// Wrap msg in <pre> and append to log.
}