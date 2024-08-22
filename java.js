//funkcja do automatycznego odswiezenia strony 
//function ref(){
 //    window.location.reload();}
//^^^^^^^^^^^^^^
function format(){
var prost = document.getElementById("prosty").value;
var kursy = document.getElementById("kursywa").value;
 
//var prost = document.getElementById("wybierz").options[document.getElementById("wybierz").firstElementChild ].value;
//var kursy = document.getElementById('wybierz').options[document.getElementById('kursywa').lastElementChild ].value;
    
if(kursy.onchange="format();"){      
document.getElementById('para').style.fontStyle = "italic";
} else { prost.onchange="format();"
document.getElementById('para').style.fontStyle = "normal";
}        
}
function textSize(){
var proc = document.getElementById("procent").value;
document.getElementById('para').style.fontSize = proc + "%";       
}
function kolor(){
var col1 = document.getElementById("col1");
if(col1.onclick="kolor();"){
document.getElementById('para').setAttribute("style","color: red");
        
} }
function kolor2(){
var col2 = document.getElementById("col2");
if(col2.onclick="kolor2();"){
        
document.getElementById('para').setAttribute("style","color: green")
}
    
}
function kolor3(){
var col3 = document.getElementById("col3");
    
if(col3.onclick="kolor3();"){
document.getElementById('para').setAttribute("style","color: blue")
}


}
//if(col1){
       // para.backgroundColor = "red";
   // }else if (col2){
      //  para.backgroundColor = "green";
   // }else (col3){
       // para.backgroundColor = "blue" ;
   // }
          
   //var  wybierz =document.getElementById("").color;
     // col1.addEventListener("click")function kolor(){
