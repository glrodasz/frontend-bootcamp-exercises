const [a, b, ...numbers] = process.argv;

console.log(numbers.reduce((acc, cur) => Number(acc) + Number(cur), 0));
 
