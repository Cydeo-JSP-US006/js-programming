let vairableName;

vairableName = "JavaScript";

console.log(typeof vairableName);

vairableName = 100;

console.log(typeof vairableName);

console.log("----------------------------------------------------------------");

// let x = 100;

// let x = 100;

console.log("----------------------------------------------------------------");

let y;
let z;

//console.log(y * z);

console.log("----------------------------------------------------------------");

let actualNumber = "20.5";

let expectedNumber = 20.5;

console.log(actualNumber == expectedNumber);  // true

console.log(actualNumber === expectedNumber); // false

console.log(actualNumber !== expectedNumber); // true


console.log("----------------------------------------------------------------");

let browser = "chrome";

if(browser === "chrome"){
    console.log("Selected browser is Chrome");
}else if(browser == "firefox"){
    console.log("Selected browser is Firefox");
}else{
    console.log("Selected browser is invalid");
}

console.log("----------------------------------------------------------------");

switch (browser) {
    case "chrome":
        console.log("Selected browser is Chrome");
        break;
    case "firefox":
        console.log("Selected browser is Firefox");
        break;
    default:
        console.log("Selected browser is invalid");
}

console.log("----------------------------------------------------------------");


for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log("----------------------------------------------------------------");

let s = "JAVASCRIPT";

for(let c of s){
    console.log(c);
}

console.log("----------------------------------------------------------------");

let str = "1234abcde56789fghijklmn0";

str = str.replace(/\d/g, ''); // removes all the digits from the string

console.log(str);

console.log("----------------------------------------------------------------");

let expectedTitle = "Self Enrollment Portal";

let actualTitle = "self enrollment portal";

console.log(expectedTitle.toLowerCase() === actualTitle.toLowerCase());

console.log(`The expected title of the page is ${expectedTitle}, and the actual title is ${actualTitle}`);


