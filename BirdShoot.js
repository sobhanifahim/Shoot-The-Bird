
//variable declartion and getting ids
var chk1,chk2,chk3,chk4,chk5,count=10;score=0;
var gmovr,ckd1,ckd2,ckd3,ckd4,ckd5,bmb1,bmb2,bmb3;
chk1=document.getElementById("chk1");
chk2=document.getElementById("chk2");
chk3=document.getElementById("chk3");
chk4=document.getElementById("chk4");
chk5=document.getElementById("chk5");

ckd1=document.getElementById("cooked1");
ckd2=document.getElementById("cooked2");
ckd3=document.getElementById("cooked3");
ckd4=document.getElementById("cooked4");
ckd5=document.getElementById("cooked5");

bmb1=document.getElementById("bomb1");
bmb2=document.getElementById("bomb2");
bmb3=document.getElementById("bomb3");

//hiding objects for certain scores
ckd1.style.visibility="hidden";
ckd2.style.visibility="hidden";
ckd3.style.visibility="hidden";
ckd4.style.visibility="hidden";
ckd5.style.visibility="hidden";



gmovr=document.getElementById("GmOvr");
chk2.style.visibility="hidden";
chk4.style.visibility="hidden";
gmovr.style.visibility="hidden";

bmb1.style.visibility="hidden";
bmb2.style.visibility="hidden";
bmb3.style.visibility="hidden";



// animations
var anm="jump 4s infinite linear";
var anm2="jump 3s infinite linear";
var anm3="jump 2.5s infinite linear";
var anm4="jump 2s infinite linear";
var anm5="jump 1s infinite linear";
var anm6="jump .8s infinite linear";
var anm7="jump .2s infinite linear";

//countdown and showing gameover screen after countdown is 0.
setInterval(function(){
    count--;
    if(count>=0){
       document.getElementById("cnt").innerHTML=count;
    }
    if(count==0){
     gmovr.style.visibility="visible";

    }
},1000);

//function for shooting and score increament after shooting,changing background after certain score,changing animation when score increases
//increasing count after shooting
//start over after shooting

function shoot(id){
    divid=document.getElementById(id);
   setTimeout(ckdicon,5000);
    score=score+1;
      
    document.getElementById("scr").innerHTML=score;
    document.getElementById("fnlscr").innerHTML=score;
    count=count+5;

    setInterval(function(){
       
        divid.style.animation=anm;
        divid.style.animationDelay="2s";
        if(score>=10){
            chk1.style.animation=anm2;
            chk3.style.animation=anm2;
            chk5.style.animation=anm2;
        }
        if(score>=20){
            chk1.style.animation=anm3;
            chk3.style.animation=anm3;
            chk5.style.animation=anm3;
            bmb1.style.visibility="visible";
            bmb3.style.visibility="visible";
            document.getElementById("background").style.backgroundColor="grey";
            document.getElementById("countdown").style.Color="white";
            document.getElementById("score").style.Color="white";
            document.getElementById("scr").style.Color="yellow";
        }
        if(score>=25){
            chk1.style.animation=anm4;
            chk3.style.animation=anm4;
            chk5.style.animation=anm4;
            bmb1.style.animation="throwbomb 3s infinite linear";
            bmb3.style.animation="throwbomb2 3s infinite linear";
            bmb2.style.animation="throwup 3s infinite linear";
            
        }
        if(score>=30){
            chk1.style.animation=anm5;
            chk2.style.animation=anm5;
            chk3.style.animation=anm5;
            chk4.style.animation=anm5;
            chk5.style.animation=anm5;
            chk2.style.visibility="visible";
            chk4.style.visibility="visible";
            bmb2.style.visibility="visible";
            document.getElementById("background").style.backgroundColor="blue";
            document.getElementById("countdown").style.Color="white";
            document.getElementById("score").style.Color="white";
            document.getElementById("scr").style.Color="yellowgreen";
        }
        if(score>=35){
            bmb1.style.animation="throwbomb 2s infinite linear";
            bmb3.style.animation="throwbomb2 2s infinite linear";
            bmb2.style.animation="throwup 2s infinite linear";
        }
        if(score>=40){
            chk1.style.animation=anm6;
            chk2.style.animation=anm6;
            chk3.style.animation=anm6;
            chk4.style.animation=anm6;
            chk5.style.animation=anm6;
            bmb1.style.animation="throwbomb 1.5s infinite linear";
            bmb3.style.animation="throwbomb2 1.5s infinite linear";
            bmb2.style.animation="throwup 1.5s infinite linear";
        }
        if(score>=100){
            chk1.style.animation=anm7;
            chk2.style.animation=anm7;
            chk3.style.animation=anm7;
            chk4.style.animation=anm7;
            chk5.style.animation=anm7;
        }

        
    },1000)
    divid.style.animation="jumpback 1s linear";
    
//sound effect of shooting
}
function shtSnd(){
    var sht= new Audio("shoot.mp3");
    sht.play();
 }
// function for showing cooked bird after shooting 
 function ckdicon(id){
    ckdckn=document.getElementById(id);
    setInterval(function(){
      
      ckdckn.style.visibility="hidden";
    },250)
    ckdckn.style.visibility="visible";
    
     
 }
 //function for bomb blast sound
 function bombblast(){
     gmovr.style.visibility="visible";
     var blast= new Audio("bomb.mp3");
     blast.play();

 }


