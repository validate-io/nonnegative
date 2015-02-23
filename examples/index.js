'use strict';

var isNonNegative = require( './../lib' );

console.log( isNonNegative( Math.PI ) );
// returns true

console.log( isNonNegative( 0 ) );
// returns true

console.log( isNonNegative( -1 ) );
// returns false
