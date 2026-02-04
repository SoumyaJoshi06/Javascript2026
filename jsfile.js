console.log("HelloWorld");
console.error("Not good job");
console.info("ab");
const a=20; 
console.log(a);
let bool=true;
let und;
let nul=null;
console.log(typeof bool);
let x=7;
let y=10;
console.log(x+y);
let age=45;
if(age>=18){
    console.log("yes");
}else{
    console.log("No");
}

let students={
    name:"Varun",
    age:27,
}
//function
function add(p,q){
    return p+q;
}console.log(add(4,5));
const multpiply=(p,q)=>p*q;
console.log("arrow function",multpiply(5,10));
console.log(Math.sqrt(100));
//string
txt="hello world";
console.log(txt.toUpperCase());
console.log(txt.includes("hel"));
//type casting
let str="1234";
let convnum=Number(str);
console.log(typeof convnum);
console.log(str+10);
console.log(convnum+10);

