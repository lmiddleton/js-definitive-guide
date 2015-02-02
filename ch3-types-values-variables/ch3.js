/*
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
Chapter 3: Types, Values, and Variables
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
*/

// types: the kinds of values that can be represented and manipulated in a programming language


// when a program needs to retain a value for future use, it assigns the value to (or "stores" the value in) a variable

// variable: defines a symbolic name for a value and allows the value to be referred to by name


// types can be divided into two categories: primitive types and object types

	// primitive types include numbers, strings of text (strings), and Boolean truth values (booleans)

	// special values null and undefined are primitive values, but they are not numbers, strings, or booleans; each is considered to be the sole member of its own special type
	

	// a value that is not a number, string, boolean, null or undefined is an object

	// an object is a collection of properties where each property has a name and a value

	// ordinary objects are unordered collections of named values

	// an array is a special kind of object that represents an ordered collection of numbered values

	// a function is a special kind of object that has executable code associated with it

		// functions are true values and JS programs can treat them like regular objects


	// constructors: functions written to be used (with the new operator) to initialize a newly created object

		// each constructor defines a class of objects - the set of objects initialized by the constructor

		// classes can be thought of as subtypes of the object type

			// Array and Function classes

			// Date class defines objects that represent dates

			// RegExp class defines objects that represent regular expressions

			// Error class defines objects that represent syntax and runtime errors

			// you can define your own classes of objects by defining appropraite constructor functions


// automatic garbage collection for memory management


// object-oriented language

	// rather than having globally defined functions to operate on values of various types, the types themselves define methods for working with values

	// we don't pass a to a sort() function; instead, we invoke the sort() method of a:
	a.sort();	// The object-oriented version of sort(a).

	// null and undefined are the only values that methods cannot be invoked on


// types can be:
	
	// primitive types or object types
	
	// types with methods and types without
	
	// mutable and immutable types

		// a value of a mutable type can change. ex. objects and arrays

		// a value of a mutable type cannot change. ex. numbers, booleans, null, undefined, and strings

			// you can access the text at any index of a string, but JS provides no way to alter the text of an existing string


// JS converts values liberally from one type to another

	// the == equality operator performs type conversions


// variables are untyped: you can assign a value of any type to a variable, and you can later assign a value of a different type to the same variable

// variables are declared with the var keyword


// JS uses lexical scoping

	// variables declared outside of a function are global variables and are visible everywhere

	// variables declared inside a function have function scope and are visible only to code that appears inside that function