/*
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
Chapter 2: Lexical Structure
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
*/

// - lexical structure: set of elementary rules that specifies how you write programs in that language; lowest level syntax.

// - JS uses Unicode character set

// - JS is a case-sensitive language -> identifiers must always be typed with a consistent capitalization of letters

// - HTML is not case sensitive

// - you can use spaces and newlines freely

// - two styles of comments:
//		- any text between // and the end of a line is treated as a comment
//		- any text between the characters /* and */  is also treated as a comment

// - a literal is a data value that appears directly in a program. examples:
12				// The number twelve
1.2				// The number one point two
"hello word"	// A string of text
'Hi'			// Another string
true			// A Boolean value
false			// The other Boolean value
/javascript/gi	// A "regular expression" literal (for pattern matching)
null			// Absence of an object
{ x:1, y:2 }	// An object initializer
[1,2,34,5]		// An array initializer

// - an identifier is a name. identifiers are used to name variables and functions and to provide labels for certain loops
//		- must begin with a letter, an underscore (_) or a dollar sign ($)
//		- subsequent characters can be letters, digits, underscores, or dollar signs
//		examples:
i
my_variable_name
v13
_dummy
$str

// - reserved words cannot be used as regular identifiers

// - JS used the semicolon (;) to separate statements
//		- you can usually omit the semicolon between two statements if those statements are written on separate lines
//		- JS treats a line break as a semicolon if the next nonspace character cannot be interpreted as a continuation of the current statement

// - if a statement begins with (,[,/,+, or -, there is a chance that it could be interpreted as a continuation of the statement before
//		- some programmers like to put a defensive semicolon at the beginning of any such statement so that it will continue to work correctly even if the statement before is modified and a previously terminating semicolon removed:
var x = 0							// Semicolon omitted here
;[x,x+1,x+2].forEach(console.log)	// Defensive ; keeps this statement separate

// - you must not insert a line break between return, break or continue and the expression that follow the keyword. if you do, your code is likely to fail in a nonobvious way