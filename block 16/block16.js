const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

// const rocky = {
//     prescription: "phenylephrine",
//     pricePerRefill: 30,
//     refills: 5,
//     subscription: true,
//     coupon: true,
// }

// taking the customer returns total price before discount

function calctotal(customer){
    
 let totalprice = customer.pricePerRefill * customer.refills
 
 return totalprice
    
}

// discount of total price after a subscription has been applied 

function discount (pricebeforediscount){

    let priceoff = pricebeforediscount *.75



    return priceoff
 }

// function to make a coupon take $10 off 

function minusten (pricebeforecoupon){

    let couponten = pricebeforecoupon - 10

    return couponten
}

// making condition for when we are looking at a customer and applying discounts and coupons when applicable

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}
function finalPrice(customer){
    let total = calctotal(customer)

    console.log(total)
    if (customer.subscription === true){
       total = discount(total)
    console.log(total)
    }
    
    
    if (customer.coupon === true){
        total = minusten(total)
     console.log(total)
     }
     
 return total
}
console.log("timmy")

finalPrice(timmy)
console.log("sarah")

finalPrice(sarah)
console.log("rocky")
finalPrice(rocky)


// let total = calctotal(rocky)

// console.log(total)
// if (rocky.subscription === true){
//    total = discount(total)
// console.log(total)
// }


// if (rocky.coupon === true){
//     total = minusten(total)
//  console.log(total)
//  }
 