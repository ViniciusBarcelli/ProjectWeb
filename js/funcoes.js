function Avaliar(estrela) {
 var url = window.location;
 url = url.toString()
 url = url.split("index.html");
 url = url[0];

 var s1 = document.getElementById("s1").src;
 console.log(s1)
 var s2 = document.getElementById("s2").src;    
 var s3 = document.getElementById("s3").src;
 var s4 = document.getElementById("s4").src;
 var s5 = document.getElementById("s5").src;
 var avaliacao = 0;

if (estrela == 5){ 
 if (s5 == url + "img/star0.png") {
 document.getElementById("s1").src = "img/star1.png";
 document.getElementById("s2").src = "img/star1.png";
 document.getElementById("s3").src = "img/star1.png";
 document.getElementById("s4").src = "img/star1.png";
 document.getElementById("s5").src = "img/star1.png";
 avaliacao = 5;
 } else {
 document.getElementById("s1").src = "img/star1.png";
 document.getElementById("s2").src = "img/star1.png";
 document.getElementById("s3").src = "img/star1.png";
 document.getElementById("s4").src = "img/star1.png";
 document.getElementById("s5").src = "img/star1.png";
 avaliacao = 5;
}}
 
 //ESTRELA 4
if (estrela == 4){ 
 if (s4 == url + "img/star0.png") {
 document.getElementById("s1").src = "img/star1.png";
 document.getElementById("s2").src = "img/star1.png";
 document.getElementById("s3").src = "img/star1.png";
 document.getElementById("s4").src = "img/star1.png";
 document.getElementById("s5").src = "img/star0.png";
 avaliacao = 4;
 } else {
 document.getElementById("s1").src = "img/star1.png";
 document.getElementById("s2").src = "img/star1.png";
 document.getElementById("s3").src = "img/star1.png";
 document.getElementById("s4").src = "img/star1.png";
 document.getElementById("s5").src = "img/star0.png";
 avaliacao = 4;
}}

//ESTRELA 3
if (estrela == 3){ 
 if (s3 == url + "img/star0.png") {
 document.getElementById("s1").src = "img/star1.png";
 document.getElementById("s2").src = "img/star1.png";
 document.getElementById("s3").src = "img/star1.png";
 document.getElementById("s4").src = "img/star0.png";
 document.getElementById("s5").src = "img/star0.png";
 avaliacao = 3;
 } else {
 document.getElementById("s1").src = "img/star1.png";
 document.getElementById("s2").src = "img/star1.png";
 document.getElementById("s3").src = "img/star1.png";
 document.getElementById("s4").src = "img/star0.png";
 document.getElementById("s5").src = "img/star0.png";
 avaliacao = 3;
}}
 
//ESTRELA 2
if (estrela == 2){ 
    console.log(s2);
    console.log(url);
 if (s2 == url + "img/star0.png") {
     console.log("entrou");
 document.getElementById("s1").src = "img/star1.png";
 document.getElementById("s2").src = "img/star1.png";
 document.getElementById("s3").src = "img/star0.png";
 document.getElementById("s4").src = "img/star0.png";
 document.getElementById("s5").src = "img/star0.png";
 avaliacao = 2;
 } else {
 document.getElementById("s1").src = "img/star1.png";
 document.getElementById("s2").src = "img/star1.png";
 document.getElementById("s3").src = "img/star0.png";
 document.getElementById("s4").src = "img/star0.png";
 document.getElementById("s5").src = "img/star0.png";
 avaliacao = 2;
}}
 
 //ESTRELA 1
if (estrela == 1){ 
    document.getElementById("s1").src = "img/star1.png";

    if (s1 == url + "img/star0.png") {
        document.getElementById("s1").src = "img/star1.png";
        document.getElementById("s2").src = "img/star0.png";
        document.getElementById("s3").src = "img/star0.png";
        document.getElementById("s4").src = "img/star0.png";
        document.getElementById("s5").src = "img/star0.png";
        avaliacao = 1;
    } else {
        document.getElementById("s1").src = "img/star1.png";
        document.getElementById("s2").src = "img/star0.png";
        document.getElementById("s3").src = "img/star0.png";
        document.getElementById("s4").src = "img/star0.png";
        document.getElementById("s5").src = "img/star0.png";
        avaliacao = 1;
    }
}
 
 document.getElementById('rating').innerHTML = avaliacao;
 
}