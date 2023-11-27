const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// THIS ANNOTATION TURNS AN ARRAY INTO A TUPLE
const pepsi: [string, boolean, number] = ['brown', true, 40];

// OTHER WAY
// TYPE ALIAS
type Drink = [string, boolean, number];
const coke: Drink = ['brown', true, 50];
