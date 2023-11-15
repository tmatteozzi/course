import assert from 'assert';

import { forEach, map } from './index.js';

const test = (desc, func) => {
    console.log('----', desc);
    try {
        func();
    } catch(err){
        console.log(err.message);
    }
};

test('forEach function', () => {
    let sum = 0;
    forEach([1, 2, 3], (value) => {
        sum += value;
    });
    assert.strictEqual(sum, 6, 'Expected forEach to sum the array');
});

test('map function', () => {
    const result = map([1, 2, 3], (value) => {
        return value * 2;
    });
    assert.deepStrictEqual(result, [2, 4, 6]);
});

