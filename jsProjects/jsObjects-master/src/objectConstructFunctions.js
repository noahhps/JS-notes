/*  
a constructor is useful when you want to 
create multiple similar objects with the 
same properties adn methods. the code crates
objects as an instance of it 
*/

//bad practice
car1 = {
    make: 'Honda',
    model: 'Civic',
    wheels: '4'
};
car2 = {
    make: 'Honda',
    model: 'Civic',
    wheels: '8'
};
car3 = {
    make: 'Toyota',
    model: 'Sonata',
    wheels: '4'
};

//better
function Car(make, model, wheels) {
    this.make = make;
    this.make = model;
    this.wheels = wheels;
}

