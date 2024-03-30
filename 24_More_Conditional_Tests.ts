// equality and inequality test 1.
console.log("equality test with string:", "apple" === "apple");               

// equality and inequality test 2.
console.log("equality test with string:", ("apple" as string) != "orange");  

// test using lower case function.
console.log("lower case function:", "HELLO".toLowerCase() === "hello"); 

// numerical tests involving equality.
console.log("equality test with number:",22 === 22);

// numerical tests involving inequality.
console.log("inequality test with number:",(22 as number) != 28);

// greater than.
console.log("greater than test:",  30 > 15);

// less than.
console.log("less than test:", 15< 30 );

// greater than equal to.
console.log("greater than and equal to test:",   40 >= 40);

// less than and equal to.
console.log("less than equal to test:",5 <= 10 );

// test using "and" operator.
console.log("and operator test:", 5===5 && 10 > 5);

// test using "or" operator.
console.log("or operator test:", 5===5  || 10>5);

// test whether an item is in array.
const fruits:string[] = ["banana","apple","mango"];
console.log('test "mango" in the array:', fruits.includes("mango"));

// test whether an item in not in array.
console.log('test "pear" not in array:', !fruits.includes("pear"));