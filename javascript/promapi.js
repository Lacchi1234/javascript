const p1= new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P1 success"),4000);
});
const p2= new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P2 success"),2000);
    //setTimeout(()=> reject("P2 fail"),5000);
});
const p3= new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P3 success"),2000);
    //setTimeout(()=>reject("P3 fail"),3000);

});

// Promise.all([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// })

// Promise.allSettled([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// })


// Promise.race([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// })

Promise.any([p1,p2,p3])
.then((res)=>{
    console.log(res);
})


.catch((err)=>{
    console.error(err);
});