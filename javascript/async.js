// async function getData() {
//     return "nama";    
// }

// const data=getData();
// console.log(data);
//this return a promise
//to return the data "nama" we use below code

const p= new Promise((resolve,reject)=>{ 
    resolve("promise resolved value");  
});

async function getData() {
    return p;    
}
const dataPromise = getData();
dataPromise.then((res)=>console.log(res));