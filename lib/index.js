/**
*
*	VALIDATE: nonnegative
*
*
*	DESCRIPTION:
*		- Validates if a value is a nonnegative number.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isNumber = require( 'validate.io-number' );


// IS NONNEGATIVE //

/**
* FUNCTION: isNonNegative( value )
*	Validates if a value is a nonnegative number.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a nonnegative number
*/
function isNonNegative( value ) {
	return isNumber( value ) && value >= 0;
} // end FUNCTION isNonNegative()


// EXPORTS //

module.exports = isNonNegative;
