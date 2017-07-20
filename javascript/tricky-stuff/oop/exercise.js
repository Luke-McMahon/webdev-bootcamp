// TASK: 
// Crate a constructor fucntion for a Vehicle:
// Every object craete from this constructor should have a make,
// model, and year property. Each object should also have a property
// called isRunning, which should be set to false.

// Every object created from the Vehicle constructor should have a 
// function called turnOn, which changes the isRunning property to true

// Every object created from the Vehicle constructor should have a
// function called turnOff, which changes the isRunning property to false

// Every object created from the Vehicle constructor should have a 
// method called honk, which returns the string "BEEP" ONLY if the 
// isRunning property is true

function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
        this.isRunning = true;
}
    
Vehicle.prototype.turnOff = function() {
        this.isRunning = false;
    }
    
Vehicle.prototype.honk = function() {
    if(this.isRunning) {
        console.log("BEEP");
    }
}