console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    
   for ( let i = 1; i <= 100; i++ ){
        if (i % 2 !== 0){
            console.log(i);
        }
    }
}

printOdds(1)
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){

let aboveSixteen = `Congrats ${userName}, you can drive!`;
let belowSixteen = `Sorry ${userName}, but you need to wait until your're 16.`;
if( age > 16)
{
    console.log(aboveSixteen)
}
else{
    console.log(belowSixteen)
}
}

checkAge("Chinedu",27)


//Exercise 3 Section

function quadrantCheck(x,y){

let quadrant1 = `${x,y}It's in quadrant 1!`
let quadrant2 = `${x,y} It's in quadrant 2!`
let quadrant3 = `${x,y} It's in quadrant 3!`
let quadrant4 = `${x,y} It's in quadrant 4!`
let xAxis = `${x,y} is on the x axis`
let yAxis = `${ x,y} is on the y axis`

    if (x === 0){
        console.log(xAxis)
    }
    else if (y === 0){
        console.log(yAxis)
    }
    else if ( x >= 1 && y>= 1){
        console.log( quadrant1)
     }
    else if (x <= -1 && y>= 1 ){
        console.log(quadrant2)
    }
    else if (x <= -1 && y <= -1 ){
        console.log(quadrant3)
     }
    else {
        console.log(quadrant4)
        }       
}
quadrantCheck( 1,8)