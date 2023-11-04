//Question Number 1


var storedNum = (3.45214)
document.write("Original Number :"+" "+ storedNum+"<br>");

num = Math.round(storedNum)

document.write("Round Off Value : "+storedNum+"<br>")

num = Math.floor(storedNum)

document.write("Floor Value : "+storedNum+"<br>")

num = Math.ceil(storedNum)
 
document.write("Ceil Value :"+storedNum+"<br>")


//Question Number 2


var num = (-2.673)

document.write("Original Number: "+ num+"<br>");

var num = Math.round(num)

document.write("Rounf Off Value: "+num+"<br>")

var num = Math.floor(num)
 
document.write("Floor Value: "+num+"<br>")

var num = Math.ceil(num)

document.write("Ceil Value: "+num+"<br>")

//Question Number 3

var Dice = Math.ceil(Math.random() * 6)

document.write("Randome Dice Value: " + " " + Dice)

//Question Number 4

var random =  Math.floor(Math.random() * 2) +1

if(random === 1){
    document.write(random + "<br>")
    document.write("Randome Coin Value : Tails")
}else{
    document.write(random + "<br>")
    document.write("Randome Coin Value : Heads")
}

//Question Number 5

var Unique =  Math.ceil(Math.random() * 100) +1

document.write("Random Number Between 1 and 100: "+Unique)


//Question Number 6

var secretNum = 3;
var guessNum   =  Number(prompt("Enter Your Lucky Number between 1 to 10"));

if( guessNum === secretNum){
    alert("Yes! Secret number is 3")
}
else{
    alert("Wrong Number, Please try Again!")
}




//Question Number 7

var userData = prompt("What is your weight?");
var filteredNum = "";

for (var i = 0; i < userData.length; i++) {
    if (!isNaN(userData[i])  || (userData[i] == ".")){
        filteredNum += userData[i];
    }
}

if (result !== "") {
    document.write("The weight of user is " + filteredNum + " kilograms.");
} else {
    alert("Please Enter your valid weight.");
}


//Question Number 8

var age = Number(prompt("Enter Your Age"))

var a = new Date()

var Curruntyear= a.getFullYear()

var birthyear = Curruntyear - age

document.write("Your Age Is : " + age)
document.write("<br>")
document.write("Your Birth Year Is : " + birthyear)


//Question Number 9


var today = new Date()

var date = today.getDate()

if(date < 16){
        document.write("First Fifteen Days Of The Month")
}
else{
        document.write("last days of The Month")
}