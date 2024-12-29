// Generators are a special type of function that can pause and resume execution. They
// are defined using the function* syntax and use the yield keyword to return values
// one at a time.
// Regular functions run to completion when called, while generators can yield multiple
// values over time.

function* numberGenerators(){
    yield 1;
    yield 2;
    yield 3;
}

const generators = numberGenerators();
console.log(generators.next());
console.log(generators.next());
console.log(generators.next());
