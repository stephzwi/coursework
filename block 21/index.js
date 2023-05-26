//Write code that defines a constructor function called Car that creates a new object with the following properties: make, model, and year.
class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

//Add a method called getDescription to the Car prototype, which returns a string containing information about the car.
 getDescription(){
    return `${this.make} of ${this.model} was made in ${this.year}`
 }

  
}

//Define the ElectricCar function as a subclass of Car. Include an additional property called range that represents the range of the 
//electric car in miles.
class ElectricCar extends Car{
    constructor( make, model, year, range){
        super(make, model, year);
        this.make = make;
        this.model = model;
        this.year = year;
        this.range = range;
    }

    //Have the ElectricCar prototype override the getDescription method of the Car prototype with a new implementation 
//that includes information about the range of the electric car.

    eCar(){
     return `${this.make} ${this.model} was made in ${this.year} and was made drives up to ${this.range} miles`
    }
    

  
}


//Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, and range 300, and the getDescription 
//method is called on the instance. The output will be a string containing the make, model, year, and range of the electric car.

const Tesla = new ElectricCar ("Telsa","Model S", "2019", "300")

console.log(Tesla.eCar())


