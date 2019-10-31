var arr = [10, 12, 25, 6, 40, 9, 21, 20];
var arr1 = [];

// array method - forEach
arr.forEach(function(x) {
    console.log(x);
});

// array method - map 
var result = arr.map(function(x) {
    return x;
})
console.log(result);

// array method - filter
var result1 = arr.filter(function(x) {
    if (x > 20) {
        return x;
    }
})
console.log(result1);

// array method - every
var result2 = arr.every(function(x) {
    if (x > 10) {
        return x;
    }
})
console.log(result2);

// array method - some
var result3 = arr.some(function(x) {
    if (x > 10) {
        return x;
    }
})
console.log(result3);

// array method - reduce
var result4 = arr.reduce(function(x, y) {
    return x + y;
})
console.log(result4);

// hoisting
host("hello");

function host(x) {
    console.log(x);
};

function host(x) {
    console.log(x + " world");
};

x = 10;
y = 20;
console.log(x * y);
var x, y;

// call, apply, bind
function fullName(age) {
    return this.lastname + " " + this.firstname + " " + age;
};

var obj = {
    lastname: "Vars",
    firstname: "Poghosyan"
};

console.log(fullName.call(obj, 26));
console.log(fullName.call(obj, [28]));
var bd = fullName.bind(obj);
console.log(bd(30));
