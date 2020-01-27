"use strict";

//alert("Hallo");

//function meineFunktion(a, b) {
//    return a + b;
//    }
//
//
//let ergebnis = meineFunktion(4, 3);
//document.getElementById("id123").innerHTML = ergebnis;
//console.log("Ergebnis auf der Konsole ist: " + ergebnis);
//alert("Das Ergebnis ist " + ergebnis);

//let meinePerson = new Object();
//meinePerson.Vorname = "John";
//meinePerson.Nachname = "Doe";
//alert(meinePerson.Vorname);

//class Person {
//    constructor(newname, newVorname) {
//        this.Name = newname;
//        this.Vorname = newVorname;
//    }
// 
//    ausgeben() {
//        let ausgabeText = "Name: " + this.Name + "\n";
//        ausgabeText += "Vorname: " + this.Vorname;
//        alert(ausgabeText);
//    }
//}
//let dude = new Person("Doe", "John");
//dude.ausgeben();

//let meinFeld = new Array ("Apfel", "Ananas", "Banane");
//
//let text = "<ul>";
//for (let i = 0; i < meinFeld.length; i++) {
//text = text + "<li>" + meinFeld[i] + "</li>";
//}
//text += "</ul";
//document.getElementById("id123").innerHTML = text;

//let myBtn = document.getElementById("myBtn");
//myBtn.addEventListener("mouseover", myFunction);
//myBtn.addEventListener("click", mySecondFunction);
//myBtn.addEventListener("mouseout", myThirdFunction);
//function myFunction() {
//    document.getElementById("demo").innerHTML += "Mouse over!<br>";
//}
//function mySecondFunction() {
//    document.getElementById("demo").innerHTML += "Clicked!<br>";
//}
//function myThirdFunction() {
//    document.getElementById("demo").innerHTML += "Mouse out!<br>";
//}

// Inhalt von meineDatei.js:
//let dasBild = document.getElementById("meinBild");
//dasBild.addEventListener("click", bildAendern);
//function bildAendern() {
//let image = document.getElementById('meinBild');
//if (image.src.match("bulbon")) {
//image.src = "images/pic_bulboff.gif";
//} else {
//image.src = "images/pic_bulbon.gif";
//}
//}

//let ball = document.getElementById("meinBall");
//let meinButton = document.getElementById("myBtn");
//meinButton.addEventListener("click", verschieben);
//function verschieben() {
//ball.style.top = Math.random() * 200 + "px";
//ball.style.left = Math.random() * 200 + "px";
//}

document.getElementById("meineEingabe").value = "Vorbelegung";
document.getElementById("meinButton").addEventListener('click', holeInhalt);

function holeInhalt() {
    let inhalt = document.getElementById("meineEingabe").value;
    alert(inhalt);
    document.getElementById("meinButton").innerText = inhalt;
}