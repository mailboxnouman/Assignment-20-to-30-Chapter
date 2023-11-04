//Question Number 1


var storedNum = (3.45214)
document.write("Original Number :"+" "+ storedNum+"<br>");

rounded = Math.round(storedNum)

document.write("Round Off Value : "+rounded+"<br>")

flored = Math.floor(storedNum)

document.write("Floor Value : "+flored+"<br>")

ceild = Math.ceil(storedNum)
 
document.write("Ceil Value :"+ceild+"<br>")


//Question Number 2


var num = (-2.673)

document.write("Original Number: "+ num+"<br>");

var round2 = Math.round(num)

document.write("Rounf Off Value: "+round2+"<br>")

var floor2 = Math.floor(num)
 
document.write("Floor Value: "+floor2+"<br>")

var ceil2 = Math.ceil(num)

document.write("Ceil Value: "+ceil2+"<br>")

//Question Number 3

var Dice = Math.ceil(Math.random() * 6)

document.write("Randome Dice Value: " + " " + Dice)

//Question Number 4

var random =  Math.floor(Math.random() * 2) +1

if(random === 1){
    document.write(random + "<br>")
    document.write("Randome Coin Value : Tails")
    document.write("<br>")
}else{
    document.write(random + "<br>")
    document.write("Randome Coin Value : Heads")
    document.write("<br>")
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

if (filteredNum !== "") {
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