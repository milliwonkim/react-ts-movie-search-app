const debounce = (callback, delay) => {
    let interval;
    return (...args) => {
        clearTimeout(interval);
        interval = setTimeout(() => {
            interval = null;
            callback(...args);
        }, delay);
    };
};

export default debounce;
