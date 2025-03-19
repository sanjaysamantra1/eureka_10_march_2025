//input:  'abcxyz'
//output: 'bcdyza'-->

    let str='abcxyz'
    let res="";
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(char=='z'){
            res+='a';
        }
        else{
            res+=String.fromCharCode(char.charCodeAt(0)+1);
        }
    }
    console.log(res);
