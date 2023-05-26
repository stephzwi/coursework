const coffeeMenu = require("./coffee_data")

// Print out all the coffe names into an array 

for (let i = 0; i < coffeeMenu.length; i++) {
    console.log(coffeeMenu[i].name);
}

console.log(coffeeMenu.map(item => item.name))

 // Print array of all drinks that are equal to or 5 dollars

 let items = coffeeMenu.filter(item => item.price <= 5);
console.log(items);

// Print an array of drinks that are priced at an even number.

let litems = coffeeMenu.filter(item => item.price % 2===0);
console.log(litems);

// Print the total if you were to order one of every drink.

let total = coffeeMenu.reduce((total, item) => total + item.price, 0)
 
 console.log(total)

//Print an array with all the drinks that are seasonal.

let nitems = coffeeMenu.filter(item => item.seasonal === true);
console.log(nitems);

//Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
 let arr = coffeeMenu.name

coffeeMenu.forEach(item => console.log(item.name + " with imported beans"))

// function doubleit(arr){
//     if (coffeeMenu.name);
//     return arr + "with imported beans";
// }

//   let add = coffeeMenu.forEach(doubleit);

//   console.log(add)


  



