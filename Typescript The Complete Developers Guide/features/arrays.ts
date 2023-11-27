const carMakers: string[] = ['Ford', 'Toyota', 'Chevy'];

const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// EXTRACTING VALUES INFERENCE HELP
const car = carMakers[0];
const myCar = carMakers.pop();

// PREVENT INCOMPATIBLE VALUES
carMakers.push(); // IF THERE IS A NUMBER, IT THROWS AN ERROR (CAR MAKERS IS MADE OF STRINGS)

// HELP WITH MAP
carMakers.map((car: string): string => {
    return car;
});

// FLEXIBLE TYPES
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-05-10');
importantDates.push(new Date());
