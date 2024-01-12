import 'reflect-metadata';

// const plane = {
//     color: 'red'
// };

// Reflect.defineMetadata('greet', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const greet = Reflect.getMetadata('greet', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(greet);
// console.log(height);

// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');
// console.log(note);
@printMetadata
class Plane {
    color: string = 'red';

    @markFunction('Hi there')
    fly(): void {
        console.log('vrrrrr');
    }
}

function markFunction(secretInfo: string) {
    return function (target: Plane, key: string) {
        Reflect.defineMetadata('secret', secretInfo, target, key);
    };
}

function printMetadata(target: typeof Plane) {
    for (let key in target.prototype) {
        const secret = Reflect.getMetadata('secret', target.prototype, key);
        console.log(secret);
    }
}
