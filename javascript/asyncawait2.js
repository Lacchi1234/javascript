const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved");
    },5000);
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolved value");
    },10000);
});

async function handlePromise() {
    console.log("hello world");

    const val=await p1;
    console.log("namste js 1");
    console.log(val);

    const val2=await p2;
    console.log("namste js 2");
    console.log(val2);
    
}
handlePromise();