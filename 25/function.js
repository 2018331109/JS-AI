function display(){
    console.log("hello");
}
display();

//immediately invokable function

(function immediate(num1, num2){
    console.log(num1+num2);
})(2, 3);

//function expressions

const exp=function expression(msg){
    console.log(msg);
}

exp("called");


 
