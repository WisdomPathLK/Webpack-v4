


/***
 * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
 * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 */

/* Type 1 */
// export const hello ="Hello";
// export const world = "World";

/* Type 2 */
const hello = "Hello";
const world = "World";

//export  {hello, world};

/* Type 3 with as */
export { hello as Hello, world as World };