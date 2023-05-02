let keys =['First Name', 'lastName', 'email', 'phone', 'zipcode', 'favoriteFlavors', 'cupSize', 'favoriteStore','firstVisit' ]
let values = ["Jake","Smith","jaekSmih!aol.com", undefined, "631", 32, "medium", "Target", false]

let obj = {
    firstName: "Jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipcode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "target",
    firstVisit: false,

};

obj.email = "Jak3Smith1992@email.com"
obj.phone =  3195551234
obj.zipcode = 63132
obj.favoriteFlavors = ["coffee", "strawberry", "matcha"]

console.table (obj)

delete obj.zipcode
delete obj.favoriteStore

console.table (obj)

obj.toppings = [ "chocolate sprinkles", "wafer straws", "gummy bears"]
obj.futureFlavors = "mango"
obj.todaysPurchaseCost = 5.32

console.table (obj)