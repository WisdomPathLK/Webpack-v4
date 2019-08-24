
for( var i = 0; i < 3 ; i++){
    console.log( i );
}

console.log( " 'i' still exists ", i );

/***
 * let allows you to declare variables that are limited to a 
 * scope of a block statement, or expression on which it is used,
 * unlike the var keyword, which defines a variable globally, or 
 * locally to an entire function regardless of block scope. 
 */

 for( let index = 0; index < 3 ; index++ ){
     console.log( index );
 }

 // console.log("let out of the scope", index );

 if ( true ) {
    let foo;
    // let foo; // SyntaxError thrown.
  }

