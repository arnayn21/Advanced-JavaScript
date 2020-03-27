function add(num1 , num2){
    console.log([...arguments]);
    return num1+num2;
}
const result = add(2,3,4,7,5);
console.log(result);