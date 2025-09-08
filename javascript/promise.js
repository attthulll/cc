function addition(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 == 0) {
            reject("first number is zero");
        }
        resolve(num1 + num2);
    });
}

function multiplication(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 == 0) {
            reject("First number is zero");
        }
        resolve(num1 * num2);
    });
}

function division(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 == 0) {
            reject("First number is zero");
        }
        resolve(num1 / num2);
    });
}

addition(40,30).then((sum) => {
        console.log(sum);
        return multiplication(sum, 10);
    })
    .then((product) => {
        console.log(product);
        return division(product, 100);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });