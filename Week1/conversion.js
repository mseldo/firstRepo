const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};

const getFarenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};

console.log("The temperature is " + getFarenheit(15) + "F");