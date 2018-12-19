// for(var i = 0; i < numbs.length; i++ ){}
// let numbs = document.getElementsByClassName("numbs[i]");
// // console.log(numbs);
// // alert(numbs);

// for(var i = 0; i < numbs.length; i++ ){

//     numbs[i].addEventListener('click', function(event){
//         document.getElementBtextareayId("textarea").value+=numbs[i];
//     });
// }




const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five= document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

// the operators..............................
const divid = document.getElementById("divid");
const multiply = document.getElementById("multiply");
const add= document.getElementById("add");
const subtract = document.getElementById("subtract");
const percentage = document.getElementById("percentage");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");
let textarea=document.getElementById("textarea");
let bracket=document.getElementById("bracket");

// // // calllback functions.........................
 
one.addEventListener('click', function(event){
    event.preventDefault();
    let a = one.value;
   
    
textarea.value+=(a);
console.log(a);

}

);
two.addEventListener('click', function(event){
    event.preventDefault();
    let a = two.value;
   
    
textarea.value+=(a);
console.log(a);

}

);
three.addEventListener('click', function(event){
    event.preventDefault();
    let a = three.value;
   
    
textarea.value+=(a);
console.log(a);

}

);
four.addEventListener('click', function(event){
    event.preventDefault();
    let a = four.value;
   
    
textarea.value+=(a);
console.log(a);

}

);
five.addEventListener('click', function(event){
    event.preventDefault();
    let a = five.value;
   
    
textarea.value+=(a);
console.log(a);

}

);
six.addEventListener('click', function(event){
    event.preventDefault();
    let a = six.value;
   
    
textarea.value+=(a);
console.log(a);

}

);
seven.addEventListener('click', function(num7){
    event.preventDefault();
    let a = seven.value;
   
    
textarea.value+=(a);
console.log(a);

}

);
eight.addEventListener('click', function(event){
    event.preventDefault();
    let a = eight.value;
   
    
textarea.value+=(a);
console.log(a);

}

);
nine.addEventListener('click', function(event){
    event.preventDefault(event);
    let a = nine.value;
   
    
textarea.value+=(a);
console.log(a);

}

);
zero.addEventListener('click', function(event){
    event.preventDefault();
    let a = zero.value;
   
    
textarea.value+=(a);
console.log(a);

}

);
decimal.addEventListener('click', function(event){
    event.preventDefault();
    let a = decimal.value;
   
    
textarea.value+=(a);
console.log(a);

}

);
bracket.addEventListener('click', function(event){
    event.preventDefault();

    let b = textarea.lenght;

    let a = textarea.value;
    
    
   
    
textarea.value=a.slice(0, (this.textContent.length-1));
console.log(a);

}
);
divid.addEventListener('click', function(event){
    event.preventDefault();
    let a = "/";
   
    
textarea.value+=(a);
console.log(a);

}

);
multiply.addEventListener('click', function(event){
    event.preventDefault();
    let a = multiply.value;
   
    
textarea.value+=(a);
console.log(a);

}

);
add.addEventListener('click', function(event){
    event.preventDefault();
    let a = add.value;
   
    
textarea.value+=(a);
console.log(a);

}

);
subtract.addEventListener('click', function(event){
    event.preventDefault();
    let a = subtract.value;

textarea.value+=(a);
console.log(a);

}

);
percentage.addEventListener('click', function(event){
    event.preventDefault();

    let a = percentage.value;
   
    
textarea.value+=(a);
console.log(a);

}

);



equals.addEventListener('click', function(event){
    event.preventDefault();
    
    if(textarea.value != ""){

        textarea.value=eval(textarea.value)

    }else{
        textarea.value = "";
    }

    
  
}

);
