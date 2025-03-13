var a = 10;
let b = 20;
const c = 30;
console.log(`a:${a}, b:${b}, c:${c}`);

function demo(){
    var a = 100;
    let b = 200;
    const c = 300;
    console.log(`a:${a} b:${b} c:${c}`);

    if (true){
        var a = 1000;
        let b = 2000;
        const c = 3000;
        console.log(`a:${a} b:${b} c:${c}`);
    }
}
demo();
var a = 'SaiChand' // no error, var allow re-declaration in the same scope
// let b = 'Dileep'; error