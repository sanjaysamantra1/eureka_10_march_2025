// write a functio which takes 'n' params and add them
function add(...arr) { // REST Param
    let sum = 0;
    for (ele of arr) {
        sum = sum + ele;
    }
    console.log(sum);
}
add(2, 3); // 5
add(2, 3, 4); // 9
add(2, 3, 4, 5); // 14