let name = prompt("Welcome to mini golf! What is your name?");
let holes = prompt(`Hi ${name}! Would you like to play 3 or 6 holes of mini golf?`);
let total=0;
for (let i = 1; i <= parseInt(holes); i++){
    let putt= prompt(`How many putts for hole ${i} ?`);
    total += parseInt(putt);
}

if(parseInt(holes) === 3 && total > 9){
    console.log("Nice try, " + name + ". " + "Your total par was: " + "+" + total  + " .");
}
if(parseInt(holes) === 3 && total < 9){
    console.log("Great job, " + name + "! " + "Your total par was: " + "-" + total + ".")

}
if(parseInt(holes) === 3 && total === 9){
    console.log("Good game, " + name + ". " + "Your total par was: " + 0 + ".");
}
if(parseInt(holes) === 6 && total > 18){
    console.log("Nice try, " + name + ". " + "Your total par was: " + "+" + total  + ".");
}
if(parseInt(holes) === 6 && total < 18){
    console.log("Great job, " + name + "! " + "Your total par was: " + "-" + total + ".")

}
if(parseInt(holes) === 6 && total === 18){
    console.log("Good game, " + name + ". " + "Your total par was: " + 0 + ".");
}
