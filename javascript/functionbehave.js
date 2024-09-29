var x=1;
a();
b();
console.log(x);

function a(){
    var x=10;
    console.log(x);
}

var a=5;

function b()
{ 
    var x=0;
    console.log(x);
}
console.log(a);
console.log(x);
console.log(window.a);
console.log(this.a);

