document.getElementById("add").onclick=function(){
    let a = +prompt("Enter first number")
    let b = +prompt("Enter second number")
    let c= a+b;
    // alert("the result is " + c)
    document.getElementById("addr").innerHTML=c
}

document.getElementById("sub").onclick=function(){
    let a = +prompt("Enter first number")
    let b = +prompt("Enter second number")
    let c= a-b;
    // alert("the result is " + c)
    document.getElementById("subr").innerHTML=c
}

document.getElementById("mul").onclick=function(){
    let a = +prompt("Enter first number")
    let b = +prompt("Enter second number")
    let c= a*b;
    // alert("the result is " + c)
    document.getElementById("mulr").innerHTML=c
}

document.getElementById("division").onclick=function(){
    let a = +prompt("Enter first number")
    let b = +prompt("Enter second number")
    let c= a/b;
    // alert("the result is " + c)
    document.getElementById("divisionr").innerHTML=c
}

document.getElementById("greater").onclick=function(){
    let a = +prompt("Enter first number")
    let b = +prompt("Enter second number")
    if (a>b) {
        // alert(a+ " is greater than " + b)
        document.getElementById("greaterr").innerHTML=a+" is greater than " + b
    } else {
        // alert(a+ " is less than " + b)
        document.getElementById("greaterr").innerHTML=a+" is less that " + b
    }
}


document.getElementById("temp").onclick=function(){
    let temp = +prompt("Enter today's temperature")
    if (temp>15) {
        // alert(a+ " is greater than " + b)
        document.getElementById("tempr").innerHTML="You can go outside"
    } else {
        // alert(a+ " is less than " + b)
        document.getElementById("tempr").innerHTML="Stay in room "
    }
}

document.getElementById("odd").onclick=function(){
    let num = +prompt("Enter your number")
    let num2 = num%2
    if (num2==0) {
        // alert(a+ " is greater than " + b)
        document.getElementById("oddr").innerHTML="the number is even"
    } else {
        // alert(a+ " is less than " + b)
        document.getElementById("oddr").innerHTML="the number is odd "
    }
}

document.getElementById("marks").onclick=function(){
    let num = +prompt("Enter your obtained marks")
    if (num>=70) {
        // alert(a+ " is greater than " + b)
        document.getElementById("marksr").innerHTML="grade a"
    } else if(num>=50) {
        // alert(a+ " is less than " + b)
        document.getElementById("marksr").innerHTML="grade b"

    }
    else{
        document.getElementById("marksr").innerHTML="you are fail"
    } 
}