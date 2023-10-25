const debounce = (func, delay = 1000) => {
    // ID TO TRACK THE TIMEOUT TO CLEAR IT LATER 
    let timeoutId;
    return (...args) => {
        if(timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            // PASS NULL OR ALL ARGS TO THE FUNCTION
            func.apply(null, args);
        }, delay);
    };
};