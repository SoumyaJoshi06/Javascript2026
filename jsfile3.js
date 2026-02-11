let rand=Math.floor(Math.random()*6)+1;//out of a dice form 1 to 6.
console.log(rand);
let ans=Number(prompt("Enter the number"));
while(true){
    if(ans==rand){
        console.log("You guessed right!!");
        break;
    }else{
        console.log("You are wrong");
        break;
    }
}
function EnterName(name,age){
    console.log('${name} age  ${age}');
}EnterName("Soumya",23);