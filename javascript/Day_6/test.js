let str = "Pawan";
    console.log(str.includes("an"));
    let a = str.match(/an/g);
    console.log(a);
    let b = "Pavan and Pawan 0 are 1 friends";
    let c = b.match(/\d+/g)
    console.log(c)
    