let sum = 0;

function add(num1, num2, callback) {
    let err = false;
    if (num1 == 0) {
        err = true;
        callback(num1 + num2, err);
    } else {
        callback(num1 + num2, err);
    }
}

function multiplication(num1, num2, callback) {
    callback(num1 * num2);
}

function division(num1, num2, callback) {
    callback(num1 / num2);
}
add(20, 10, (sum, err) => {
    if (err) {
        console.log("First number is zero");
    } else {
        console.log(sum);
        multiplication(sum, 10, (product) => {
            console.log(product);
            division(product, 100, (divide) => {
                console.log(divide);
            })
        })
    }
})