'use strict'
let obj={
        a:10,
        b:20,
        f1: function(){
                let a = 11;
                console.log(this.a,this.b);
                function f2(){
                    console.log("inside f2",this.a);
                };
                f2();
            let f3 = () => {
                console.log("inside f3",a,this.b);

            }
            f3();
        }
    }
    obj.f1();
