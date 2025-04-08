function test(a, b, ...c) {
    console.log(a, b, c);
}
test(2, 3);             // a=2 b=3 c=[]
test(2, 3, 4, 5, 6);    // a=2 b=3 c=[4,5,6]