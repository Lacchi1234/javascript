const p= new Promise((resolve,reject)=>{ 
    resolve("promise resolved value");  
});

async function handlePromise() {
    const val= await p;
    console.log(val);
}
handlePromise();

function getData(){
    p.then((res)=>console.log(res));
    console.log("namasate js");

}getData();