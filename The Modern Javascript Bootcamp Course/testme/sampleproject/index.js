const sample = {
    forEach(array, func){
        for(let element of array){
            func(element);
        }
    }
};

export const { forEach } = sample;