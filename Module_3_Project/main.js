//JavaScript Document

// Vacation rental property constructor
function VacationRentalProperty(name, price, rating, location, rooms, availability, features) {
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.rooms = rooms;
    this.availability = availability;
    this.features = features;
}

// Array of labels that will be used to label each list item
let labels = ["Name: ", "Price: ", "Rating: ", "Location: ", "Rooms: ", "Availability: ", "Features: ", "Type: "];

// Function that creates an article element containing a h2 with the name of the rental and a list of the other properties (price, rating, location, rooms, availability, features, type)
VacationRentalProperty.prototype.description = function(obj) {
    let section = document.querySelector("section");
    let article = document.createElement("article");
    let h2 = document.createElement("h2");
    let ul = document.createElement("ul");
    h2.textContent = this.name + this.available(obj);
    let values = Object.values(obj);
    for(let i = 1; i < values.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = labels[i] + values[i];
        ul.appendChild(listItem);     
    }
    article.appendChild(h2);
    article.appendChild(ul);
    section.appendChild(article);
};

// Function that checks if the rental is available and returns a string that will be added onto the h2 elements
VacationRentalProperty.prototype.available = function(obj) { 
        if(obj.availability == "No") {
            return " - no vacancies";
        }
        else {
            return " - has vacancies";
        }       
}

// Instantiating 2 vacation rental property objects
let p1 = new VacationRentalProperty("Rental 1", 800, "2/5", "Toronto", 2, "No", ["Laundry", "Balcony", "Parking"]);
let p2 = new VacationRentalProperty("Rental 2", 1500, "4/5", "New York", 1, "Yes", ["Downtown", "Walk-in Closet"]);

// Calling description function on p1 and p2 objects which will display the object properties in html
p1.description(p1);
p2.description(p2);

// Constructor function for special rate rental properties which is based on the vacation rental property prototype
function SpecialRateRentalProperty(name, price, rating, location, rooms, availability, features, type) {
    VacationRentalProperty.call(this, name, price, rating, location, rooms, availability, features); 
    this.type = "Special Rate";
    this.price = discount(price);
}

// Function that will calculate and return a %20 discount price based on the initial price
function discount(price) {
    return price * 0.8;
}
  
//Create object based on prototype object
SpecialRateRentalProperty.prototype = Object.create(VacationRentalProperty.prototype); 

// Instantiating a special rate rental property object
let p3 = new SpecialRateRentalProperty("Rental 3", 1000, "2/5", "Chicago", 3, "No", ["Hot Tub", "Patio"]);

// Calling description function on p3 object which will display the object properties in html
p3.description(p3);

// Constructor function for superhost rental properties which is based on vacation property prototype
function SuperhostRentalProperty(name, price, rating, location, rooms, availability, features, type) {
    VacationRentalProperty.call(this, name, price, rating, location, rooms, availability, features);
    this.type = "Superhost";
}

// Create object based on prototype opject
SuperhostRentalProperty.prototype = Object.create(VacationRentalProperty.prototype); 

// Instantiating a superhost rental property object
let p4 = new SuperhostRentalProperty("Rental 4", 2000, "5/5", "Los Angeles", 3, "Yes", ["Pool", "Large Backyard"]);

// Calling description function on p4 object which will display the object properties in html
p4.description(p4);
