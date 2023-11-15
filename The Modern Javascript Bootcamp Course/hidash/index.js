const tests = {
    forEach(array, func){
        for(let index in array){
            func(array[index], index);
        }
    },
    map(array, func){
        const result = [];
        for(let i = 0; i < array.length; i++){
            result.push(func(array[i], i));
        }
        return result;
    }
};

export const { forEach, map } = tests;