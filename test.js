/*
function func() {
    fetch("./Poeng.txt").then(x => x.text()).then(y => let varible = y);
    alert(varible);
};
*/
const div = document.createElement("div");
div.setAttribute("id", "div1");
div.setAttribute('style', 'white-space: pre;');
const input = document.createElement("input");
const button = document.createElement("button");

let meny;
function Vis_tekst(tekst, lagre_variabel = false) {
    div.textContent = tekst;
    if (lagre_variabel != false) {lagre_variabel = tekst;}
}

let språk;

div.textContent = "Enter a desired language. English or Norwegian.";
button.textContent = "Submit";

document.body.appendChild(div);
document.body.appendChild(input);
document.body.appendChild(button);

function Get_input_content() {
    språk = input.value;
    input.value = "";
    
    if (språk == "Norsk") {
        fetch("./Poeng.txt")
        .then(innfil => innfil.text())
        .then(fil_tekst => Vis_tekst(fil_tekst, meny));
    }
    else {
        div.textContent = div.textContent + "\nThe submitted text is not a recognised language. Please enter a recognised one."
    }
};
button.onclick = Get_input_content;

