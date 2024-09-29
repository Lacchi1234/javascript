function a()
{
    console.log(d);
}
var d=23;
a();
b();
function b()
{
    c();
    function c(){
        console.log(d)
    }
}
