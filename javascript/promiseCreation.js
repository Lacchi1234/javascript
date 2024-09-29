const cart=['shoes','pants'];

createOrder(cart)
    .then(function(orderId){
        console.log(orderId);
        return orderId;
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo)
    })

    .then(function(orderId){
        console.log("no matter this will be executed");
    });

//producer

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject){
        //createOrdee
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err=new Error("cart is not valid");
            reject(err);
        }
    
        //logic for createOrder
        const orderId="12345";
        if(orderId) {
            setTimeout(function(){
                resolve(orderId);
        },5000);
    }
    });
return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("payment success");
    })
}

function validateCart(cart){
    return true;
}