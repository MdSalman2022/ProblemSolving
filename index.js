// 1.Convert radian to degree 
let PI = 3.14159265359;

function radianToDegree(rad){
    if(typeof rad == 'number'){
        return parseFloat((rad * 180/PI).toFixed(2))
    }
    else{
        console.log("Error! Please input number.");
    }
    
}

console.log(radianToDegree(true))


// 2.Check whether the given file name is a javascript file or not 

function isJavaScriptFile(name){
    if(name.endsWith('js')){
        return true;
    }
    else{
        return false;
    }    
}

console.log(isJavaScriptFile('index.js'));


// 3.Calculate the total oil price that I have to pay 

let dieselPrice = 114;
let petrolPrice = 130;
let octanePrice = 135;

function oilPrice(diesel, petrol, octane){
    totalPrice = diesel*dieselPrice + petrol*petrolPrice+ octane*octanePrice;

    return totalPrice;
}


console.log(oilPrice(1,2,3))


// 4.Find out public bus fare

let ticketPrice = 250;

function publicBusFare(person){
    if(person >= 50){
        person = person % 50;

        if(person >= 11){
            person = person % 11;
        }

        totalBusFare = person*ticketPrice;

    }
    else{
        person = person % 11;

        totalBusFare = person*ticketPrice;
    }
    return totalBusFare;
}


console.log(publicBusFare(227));




// 5.Find out best friend 

function isBestFriend(parameter1, parameter2){

    if(parameter1.name == parameter2.friend && parameter1.friend == parameter2.name){
        return true;
    }
    else {
        return false;
    }
}


console.log(isBestFriend({name:'kibria', friend: 'rejaul'}, {name:'rejaul', friend:'kibria'}))


