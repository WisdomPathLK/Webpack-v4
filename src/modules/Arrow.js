const array = [1,2,3,4];

array.forEach( function( i, val ){
    console.log( 'index', i, 'val', val );
});


const doubled = array.map( ( val ) => {
   // console.log( 'val', val );

    return val * 2;
});

console.log( "doubled", doubled );


const newDouble = array.map( ( val ) => val * 2 );

console.log( "newDouble", newDouble );