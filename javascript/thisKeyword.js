"use strict";
console.log(this); //global object// 

function x(){
    //the output of THIS will depend whether the function is in strict mode/non strict mode
    //in strict mode the value of this is UNDEFINED
    //in non strict mode the value of this will be GLOBAL OJECT. becoz of THIS SUBSTITUTION
    console.log(this);  
}

//in strict mode 
x(); //undef
window.x(); //global object

//this inside object
const obj={
    a:10,
    x:function(){
        console.log(this);
        console.log(this.a);
    },
}
obj.x();

//THIS inside arrow function will point to the enclosing lexical context
//here the lexical context is global space
const obje = {
    a:10, 
    x: () => {
        console.log(this);
    },
};   

obje.x();

// this inside nested arrow function

const obj2 = {
    a: 20,
    x: function () {
    // enclosing lexical context
    const y = () => {
        console.log(this);
    };
    y(); 
    },
};
obj2.x();


// this inside DOM elements → refence to HTMelement