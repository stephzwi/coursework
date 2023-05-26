
 const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];
const Name = "FREELANCERS"

//printing out the names of the array
for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
}
// turning the arrays into an li and
//create an unordered list with for main()

function main(){
    const container = document.getElementById("root")
    const ul = document.createElement("ul")
    
    
    for (let i = 0; i < users.length; i++) {
        console.log(users[i].name);
        

    }
//loop through the users array creating li elements.
    for (let i = 0; i < users.length; i++) {
        const li = document.createElement("li");
        li.style.fontFamily = "arial"
        li.innerHTML = users[i].name;
        ul.appendChild(li);
    }
//append those elements to your html 
    container.appendChild(ul);
}

  // get the div with the id of root 
const root = document.getElementById("root");

//create a h1 element eith the name that say  "FREELANCERS"
const h1 = document.createElement("h1")
h1.innerHTML = Name;
h1.style.color = "red"
h1.style.fontSize = "20px"
h1.style.fontFamily = "arial"

//append th h1 element to the root div
root.appendChild(h1);

// style using css 



 main()