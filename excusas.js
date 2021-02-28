let who = ["The dog", "The cat", "An OVNI", "The government", "The fairies","The gnomes","The monarchy","Some demons", "The angels"];
let action = ["stole", "ran over","grabbed", "sang","rang", "took", "stomped", "fought","misplaced","carried"];
let what = ["a gun", "a broomstick","some door","dog shit","salami","pizza","gold", "money", "a book", "some animal"];
let when = ["a few seconds ago","yesterday","some minutes ago","a while ago", "just now", "a couple of hours ago","some weeks ago", "literally last year"];

function generateExcuse(ejecutor, accion, objeto, lugar){
    
    let randIndex1 = Math.floor(Math.random()*ejecutor.length) ;
    let randIndex2 = Math.floor(Math.random()*accion.length );
    let randIndex3 = Math.floor(Math.random()*objeto.length );
    let randIndex4 = Math.floor(Math.random()*lugar.length );
    return `${ejecutor[randIndex1]} ${accion[randIndex2]} ${objeto[randIndex3]} ${lugar[randIndex4]}`
    
}
//console.log(generateExcuse(who, action, what, when));
document.getElementById("excusa").innerHTML = generateExcuse(who, action, what, when);