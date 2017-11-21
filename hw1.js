// FizzBuzz
const fizzbuzz = function(n) {
    for (let i = 0; i >= n; ++i) {
        if (i % 15 == 0) {
            console.log("fizzbuzz");
        } else if (i % 3 == 0) {
            console.log("fizz");
        } else if (i % 5 == 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

// map через for
const map_for = function(array, func) {
    result = [];
    let len = array.length;
    for (let i = 0; i != len; ++i) {
        result.push(func(array[i]));
    }
    return result;
}

//map через forEach
const map_forEach = function(array, func) {
    result = [];
    array.forEach((x) => result.push(func(x)));
    return result;
}

//map через reduce
const map_reduce = function(array, func) {
    result = [];
    array.reduce((acc, x) => {
        acc.push(func(x));
        return acc;
    }, result);
    return result;
}

//filter через for
const filter_for = fuction(array, pred) {
    result = [];
    let len = array.length;
    for (let i = 0; i != len; ++i) {
        if (pred(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

//filter через forEach
const filter_forEach = function(array, pred) {
    result = [];
    array.forEach((x) => {
        if (pred(x)) {
            result.push(x);
        });
    return result;
    }

//filter через reduce
const filter_reduce = function(array, pred) {
    result = [];
    array.reduce((acc, x) => {
        if (pred(x)) {
            acc.push(x);
        }
        return acc;
    }, result);
    return result;
}

//every через for
const every_for = function(array, pred) {
    let len = array.length;
    for (let i = 0; i != len; ++i) {
        if (!pred(array[i])) {
            return false;
        }
    }
у    return true;
}

//every через forEach
const every_forEach = function(array, pred) {
    array.forEach((x) => {
        if (!pred(x)) {
            return false;
        }
    });
    return true;
}

//every через reduce
const every_reduce = function(array, pred) {
    return array.reduce((acc, x) => acc && pred(x), true);
}

//some через for
const some_for = function(array, pred) {
    let len = array.length;
    for (let i = 0; i != array.size(); ++i) {
        if (pred(array[i])) {
            return true;
        }
    }
    return false;
}

//some через forEach
const some_forEach = function(array, pred) {
    array.forEach((x) => {
        if (pred(x)) {
            return true;
        }
    });
    return false;
}

//some чрез reduce
const some_reduce = function(array, pred) {
    return array.reduce((acc, x) => acc || pred(x), false);
}

//mean
const mean = function(array) {
    let result = 0;
    array.forEach((x) => result + x);
    return result / array.length;
}
