// Global, Function, Block
var a = 10;
let b = 20;
const c = 30;

console.log(`Global Scope -> a:${a}, b:${b}, c:${c}`);

var a = 100; // no error
//let b = 200; // you cannot declare the same variable b
console.log(`a:${a}, b:${b}, c:${c}`);

function demo() {
    var a = 1450;
    let b = 26570;
    const c = 36570;

    console.log(`Function Scope -> a:${a}, b:${b}, c:${c}`);

    if (true) {
        var a = 104;
        let b = 203;
        const c = 304;
    
        console.log(`Block Scope -> a:${a}, b:${b}, c:${c}`);
    }
}
demo();

var a = 'Neel' //no error, var allows redeclarations in the same scope
// var b = 'Kawitkar'; //error