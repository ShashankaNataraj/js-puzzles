// from https://frontendmasters.com/courses/javascript-the-good-parts/douglas-crockfords-function-challenges/

/*
* Wite a function that takes an argument and returns a function that returns an argument
*
* Example:
* idf = identityf(3);
* idf() //3
* */

function identityf(num){
    return function(){
        return num;
    }
};
var idf = identityf(3);
console.log(idf);
/*
 * Wite a function that adds from two invocations
 *
 * Example:
 * addf(3)(4) //7
 * */

function addf(x){
    return function(y){
        return x + y;
    }
}
console.log(addf(3)(4));

/*
 * Wite a function that takes a binary function, and makes it callable with two invocations
 *
 * Example:
 * addf=applyf(add);
 * addf(3)(4); //7
 * applyf(mul)(5)(6); //30
 * */

function add(x,y){
    return x+y;
}
function applyf(op){
    return function(x){
        return function(y){
            return op(x,y);
        }
    };
}
console.log(applyf(add)(3)(4));