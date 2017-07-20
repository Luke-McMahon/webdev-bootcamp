
#Object Orientated Programming
* A programming model based around the idea objects
* These objects are constructed from what are called "classes", which we can think of like a blueprint.
    We call these objects created from classes "instances".
* We strive to make our classes abstract and modular.

<hr/>

##OOP in JavaScript
* But Javascript does not have "classes" build into it — so what do we do?
* <strong>We use functions and objects!</strong>
###Object Creation
* Imagine we want to make a few house objects, they will all have bedrooms, bathrooms and numSqft.
```javascript
var house  {
    bedrooms: 2,
    bathrooms: 2,
    sqFeet: 1000
};
var house2  {
    bedrooms: 2,
    bathrooms: 2,
    sqFeet: 1000
};
var house3  {
    bedrooms: 2,
    bathrooms: 2,
    sqFeet: 1000
};
var house4  {
    bedrooms: 2,
    bathrooms: 2,
    sqFeet: 1000
};

// Imagine if we had to make 100 houses!!
```
###A Solution
* Instead of making an infinite number of different objects, let's see if we can create a fucntion to
    construct these similar "house" objects.
* <strong>Constructor Functions</strong>
* Let's use a function as a blueprint for what each house should be - we call these kinds of functions 
    "constructor" functions
```javascript
function House(bedrooms, bathrooms, sqFeet) {
    this.bedrooms  = bedrooms;
    this.bathrooms = bathrooms;
    this.sqFeet    = sqFeet;
}
```

####Let's take note of a few things
<ul>
    <li>Capitilization of the function name - this is convention!</li>
    <li>The keyword 'this' is back!</li>
    <li>We are attaching properties onto the keyword 'this'. We would like
       the keyword 'this' to refer to the object we will create from our 
       constructor function, how might we do that? </li>
</ul>

###Creating an object
* So how do we use our constructors to actually construct objects?
```javascript
function House(bedrooms, bathrooms, sqFeet) {
    this.bedrooms  = bedrooms;
    this.bathrooms = bathrooms;
    this.sqFeet    = sqFeet;
}
```
```javascript
var firstHouse = House(2, 2, 1000); // does this work?
firstHouse; //undefined... I guess not!
```
####Why is this not working?
<ul>
    <li>We re not returning anything from the function so our 
        House function returns undefined</li>
    <li>We are not explicitly binding the keyword 'this' or placing it
        inside a declared object. This means the values of the keyword
        'this' will be the global object, which is not what we want!</li>
</ul>

###The 'new' keyword
* Our solution to the problem!
```javascript
function House(bedrooms, bathrooms, sqFeet) {
    this.bedrooms  = bedrooms;
    this.bathrooms = bathrooms;
    this.sqFeet    = sqFeet;
}
```
```javascript
var firstHouse = new House(2, 2, 1000);
firstHouse.bedrooms;  // 2
firstHouse.bathrooms; // 2
firstHouse.sqFeet;    // 1000
```
####So what does the new keyword do? A lot more than we might think...
<ul>
    <li>It first creates an empty object</li>
    <li>It then sets the keyword 'this' to be that empty object</li>
    <li>It addes the line 'return this' to the end of the function, which follows it</li>
    <li>It adds a property onto the empty object called "__proto__", which links the 
        prototype property on the constructor function to the empty object
        (more on this later)</li>
</ul>

###Your turn!
* Create a constructor function for a Dog - each dog should have a name and an age.
  As a bonus, add a function for each dog call 'bark', which console.log's the name
  of the dog added to the string 'just barked!'
```javascript
function Dog(name) {
    this.name = name;
    this.age  = age;
    
    this.bark = function() {
        console.log(name + " just barked!");
    }
}

var rusty = new Dog("Rusty", 3);
var fido  = new Dog("Fido" , 1);

rusty.bark();
fido.bark();
```