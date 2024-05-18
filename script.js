var t1_fr = [
    "CHIEN", "POMME", "TABLE", "VOILE", "LIVRE", "TRAIN", "FLEUR", "OUTIL", "PLAGE", "CONTE",
    "ROCHE", "RIVET", "PLUME", "TIGRE", "LAINE", "CABLE", "HERBE", "BOULE", "CLEOT", "BEIGE",
    "DOIGT", "ECOLE", "SUCRE", "SERRE", "ROUTE", "FAUTE", "LARME", "MANTE", "RAMEE", "FEUIX",
    "NACRE", "CINEA", "GANTS", "POULE", "SOINS", "FLAIR", "CHOSE", "VERRE", "NUITS", "COTON",
    "RENNE", "CORDE", "ETOLE", "RADIO", "COUTE", "VIRER", "BISES", "GAZON", "RALES", "MAGIE"
];

var t2_en = [
    "APPLE", "CHAIR", "PLANT", "WATER", "TIGER", "TRAIN", "TABLE", "PAPER", "MOUSE", "BREAD",
    "ANGEL", "LEMON", "HOUSE", "SMILE", "DANCE", "QUEEN", "SHEEP", "MONEY", "CLOUD", "EARTH",
    "GRACE", "FAIRY", "GHOST", "SNAKE", "ROUND", "GREEN", "HAPPY", "TOWER", "RIVER", "BEACH",
    "MUSIC", "GLASS", "ROBOT", "FLUTE", "BRUSH", "CROWN", "CHAIR", "DRESS", "WATCH", "SHOES",
    "SWEET", "CLOUD", "STORY", "MAPLE", "CROWN", "VOICE", "MAPLE", "CHAIR", "PLANE", "HORSE"
];

function mottt() {
    if (languee == "frr") {
        var index = Math.floor(Math.random() * t1_fr.length);
        return t1_fr[index];
    } else{
        var index = Math.floor(Math.random() * t2_en.length);
        return t2_en[index];
    } 
    
}
var mot;
document.addEventListener('DOMContentLoaded', function() {
    mot =mottt();
})



function dis_inp() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'text') {
            inputs[i].disabled = true;
            inputs[i].value="";
            inputs[i].style.background="none"
        }
    }
    document.getElementById('a1').disabled = false;
    document.getElementById('a1').focus();
}

function joueur() {
    var c = 97;
    var essai = 6;
    for(let i=0;i<6;i++) {
        var bc=document.getElementById(String.fromCharCode(c) + "1").style.backgroundColor;
        if (document.getElementById(String.fromCharCode(c) + "1").value !="" &&  (bc!="rgb(31, 175, 31)" || bc!="yellow" || bc!="rgb(255, 71, 71)")) {
            var correct=0;
            for (let l = 1; l <= 5; l++) { 
                var cc = document.getElementById(String.fromCharCode(c) + l).value.toUpperCase();
                if (cc == mot[l - 1]) {
                    document.getElementById(String.fromCharCode(c) + l).style.background = "rgb(31, 175, 31)";
                    correct++;
                } else if (mot.includes(cc)&& cc!="") {
                    document.getElementById(String.fromCharCode(c) + l).style.background = "yellow";
                } else {
                    document.getElementById(String.fromCharCode(c) + l).style.background = "rgba(255, 71, 71,0.5)";
                }
            }
        }
        if(correct==5){
            ch1="";
            if(languee=="frr"){
                ch="félicitation\nTu as deviné le mot"
            }
            else{
                ch="congratulation!\nYou have gussed the word"
            }
            alertt(ch)
            restard()
            break
        }
        if(document.getElementById(String.fromCharCode(c) + "1").value !=""){
            essai--;
            essaiii(essai);
        }
        if(essai==0 && correct<5){
            ch2=""
            if(languee=="frr"){
                ch2="Butter luck next time\nThe word was : "+mot
            }
            else{
                ch2="Beurre de chance la prochaine fois\nle mot était : "+mot
            }
            alertt(ch2);
            restard()
            break
        }
        c=c+1;
    }
}
function restard(){
    dis_inp()
    if(languee=="frr"){
        document.getElementById('es').innerHTML="Trouver le mot en 6 essais"
    }
    else{
        document.getElementById('es').innerHTML="Find the word in 6 tries"
    }
    mottt()
}

function clicker(prec, act, suiv, event) {
    var keyCode = event.keyCode || event.which;
    switch(keyCode) {
        case 13:
            if(suiv==null &&  document.getElementById(act).value!=""){
                joueur();
                let ni =String.fromCharCode(act[0].charCodeAt(0)+1)+"1";
                document.getElementById(act).disabled = true;
                if(ni){
                    document.getElementById(ni).disabled = false;
                    document.getElementById(ni).focus();
                }
                
            }
            else{
                ch3=""
                if(languee=="frr"){
                    ch3="completer les 5 caracteres"
                }
                else{
                    ch3="complete the 5 characters"
                }
                alertt(ch3)
            }
            break;
        case 8:
            if (prec == null || document.getElementById(act).value != "") {
                document.getElementById(act).value = "";
            } else {
                document.getElementById(act).disabled = true;
                document.getElementById(prec).disabled = false;
                document.getElementById(prec).focus();
                document.getElementById(prec).value = "";
            }
            break;
        default:
            if (suiv != null) {
                document.getElementById(suiv).disabled = false;
                document.getElementById(suiv).focus();
                document.getElementById(act).disabled = true;
                
                
            }
    }
}
function mode(){
    
    if (document.getElementById('color_mode').checked == true){
        document.getElementById('s').style.backgroundColor="black";
        document.getElementById('h').style.backgroundColor='rgba(50, 50, 50, 1)';
        document.getElementById('home').style.backgroundColor='rgba(50, 50, 50, 1)'
        document.getElementById('f').style.backgroundColor='rgba(50, 50, 50, 1)';
        document.getElementById('menu').style.backgroundColor='rgb(66, 66, 66)';
        document.getElementById('titre').style.color='white';
        document.getElementById('es').style.color='white';
        document.getElementById('cr').style.color='white';
        document.getElementById('lang').style.color='white';
        var inputs = document.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type === 'text') {
                inputs[i].style.border = "ridge white";
                inputs[i].style.color = "white";
            }
        }
        document.getElementById('tt').style.backgroundColor='#0c0b0b';
        document.getElementById('tt').style.border = '4px ridge white';
        document.getElementById('tt').style.boxShadow = '0 0 20px rgba(255, 255, 0, 0.6)';
        

    }
    else{
        
        document.getElementById('s').style.backgroundColor="white";
        document.getElementById('h').style.backgroundColor='lightgray';
        document.getElementById('home').style.backgroundColor='lightgray'
        document.getElementById('f').style.backgroundColor='lightgray';
        document.getElementById('menu').style.backgroundColor='#f0f0f0';
        document.getElementById('titre').style.color='black';
        document.getElementById('es').style.color='black';
        document.getElementById('cr').style.color='rgb(77, 3, 77)';
        document.getElementById('lang').style.color='black';
        var inputs = document.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type === 'text') {
                inputs[i].style.border = "ridge black";
                inputs[i].style.color = "black";
            }
        } 
        document.getElementById('tt').style.backgroundColor='#f3eaea52';
        document.getElementById('tt').style.border='4px ridge black';
        document.getElementById('tt').style.boxShadow = '0 0 20px rgba(0, 0, 100, 0.6)';
    }
}




function alertt(message) {
    let articleElement = document.getElementById('b').querySelector('section');
    let aldiv = document.createElement('div');
    aldiv.classList.add('alert');

    let cbtn = document.createElement('button');
    cbtn.innerText = "X";
    cbtn.addEventListener('click', function() {
        aldiv.remove();
    });

    let mspn = document.createElement('span');
    mspn.innerText = message;

    aldiv.appendChild(mspn);
    aldiv.appendChild(cbtn);
    articleElement.appendChild(aldiv);
}


function essaiii(i){
    if(languee=="frr"){
        if(i==1){
            document.getElementById('es').innerHTML="Il vous reste 1 essai"
        }
        else{
            document.getElementById('es').innerHTML="Il vous reste "+i+" essais"
        } 
    }
    else{
        if(i==1){
            document.getElementById('es').innerHTML="You have 1 attempt left"
        }
        else{
            document.getElementById('es').innerHTML="You have "+i+" attempts left"
        }
    }
    
}
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('checkbox');
    const menu = document.getElementById('menu');
    toggleButton.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
});

function playClickSound() {
    var checkbox2 = document.getElementById('checkbox2');
    if (!checkbox2.checked) {
      var clickSound = document.getElementById("clickSound");
      clickSound.currentTime = 0; 
      clickSound.play();
    }
  }
  
document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll(".clic");
    elements.forEach(function(element) {
       element.addEventListener("click", playClickSound);
    });
});

function changebg(checkboxId, divId) {
    var checkbox = document.getElementById(checkboxId);
    var div = document.getElementById(divId);
    if (checkbox.checked) {
        if (checkboxId === 'checkbox1') {
            div.style.backgroundImage = "url('image/aa.png')";
        }else if (checkboxId === 'checkbox2') {
            div.style.backgroundImage = "url('image/bb.png')";
        }
    }else {
        if (checkboxId === 'checkbox1') {
            div.style.backgroundImage = "url('image/a.png')";
        }else if (checkboxId === 'checkbox2') {
            div.style.backgroundImage = "url('image/b.png')";
        }
    }
    div.classList.add('scale'); 
    setTimeout(function() {
        div.classList.remove('scale'); 
    }, 300); 
}
var languee="frr";
function langue(ln){
    if(ln=="an"){
        languee="ann"
        mot =mottt();
        document.getElementById('titre').innerHTML="Word of the day";
        document.getElementById('r').innerHTML="All rights reserved"
        document.getElementById("es").innerHTML="Find the word in 6 tries"
        document.getElementById('mdd').dataset.off = "Light";
        document.getElementById('mdd').dataset.on = "Dark";
        document.getElementById('lgg').innerHTML = "Language";

    }
    else{
        languee="frr"
        mot =mottt();
        document.getElementById('titre').innerHTML="Mot du jour";
        document.getElementById('r').innerHTML="Tous droits réservés"
        document.getElementById("es").innerHTML="Trouver le mot en 6 essais"
        document.getElementById('mdd').dataset.off = "Lumière";
        document.getElementById('mdd').dataset.on = "Sombre";
        document.getElementById('lgg').innerHTML = "Langue";
    }
}


function keyboard(){
    let keyboard = document.getElementById('keyboard');
    keyboard.classList.toggle('visible'); 
}
function ecrit() {
    let buttons = document.querySelectorAll('.btn');
    let delete_btn = document.querySelector('.delete');
    let entrer_btn = document.querySelector('.entrer');
    let actInput = document.querySelector('input[type=text]:not([disabled])');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (actInput) {
                actInput.value = btn.innerText;
                let nii=actInput.id[0]+(Number(actInput.id[1])+1)
                if(document.getElementById(nii)){
                    actInput.disabled = true;
                    document.getElementById(nii).disabled = false;
                    actInput = document.getElementById(nii)
                    actInput.focus()
                } 
            }
        });
    });

    entrer_btn.addEventListener('click', () => {
        joueur();
        nii=String.fromCharCode(actInput.id[0].charCodeAt(0)+1)+"1";
        if(document.getElementById(nii)){
            document.getElementById(nii).disabled = false;
            actInput=document.getElementById(nii)
        }
    });
    delete_btn.addEventListener('click', () => {
        if(actInput.value !=''){
            actInput.value = "";
        }
        else{
            if (actInput) {
                actInput.disabled = true;
                let previousInputId = String.fromCharCode(actInput.id[0].charCodeAt(0)) + (Number(actInput.id[1]) - 1);
                if (document.getElementById(previousInputId) != null) {
                    actInput = document.getElementById(previousInputId);
                    actInput.disabled = false;
                    actInput.value = "";
                } else {
                    let previousButtonId = String.fromCharCode(actInput.id[0].charCodeAt(0) - 1) + "5";
                    actInput = document.getElementById(previousButtonId);
                    if (actInput) {
                        actInput.disabled = false;
                        actInput.value = "";
                    }
                }
            }
        }
        
    });
}
    

document.addEventListener('DOMContentLoaded', function() {
    ecrit();
});


annyang.setLanguage('fr-FR');
function detectSpeech(duration) {
    return new Promise((resolve, reject) => {
        let speechDetected = "";
        annyang.addCallback('result', (phrases) => {
            speechDetected += phrases[0] + " ";
        });
        setTimeout(() => {
            annyang.abort();
            resolve(speechDetected.trim());
        }, duration);
        annyang.start();
    });
}


async function handleMicCheckbox() {
    const micCheckbox = document.getElementById("checkbox3");
    if (!micCheckbox.checked) {
        const detectedSpeech = await detectSpeech(8000);
        if(detectedSpeech!=""){
            document.getElementById("checkbox3").checked=true;
            remplir(detectedSpeech)
        }
        else{
            ch4=""
            if(languee=="frr"){
                ch4="Veuillez réessayer!"
            }
            else{
                ch4="Try Again!"
            }
            alertt(ch4)
            document.getElementById("checkbox3").checked=true;
            
        }

       
    }
}
function remplir(ch){
    let p = "abcdef";
    let i = 0;
    let idd = p[i] + "1";
    while (document.getElementById(idd).value !== "" && i < 6) {
        i++;
        idd = p[i] + "1";
    }
    for (let j = 0; j <=4 ; j++) {
        let iddd = p[i] + (j+1);
        document.getElementById(iddd).value = ch[j];
    }
    joueur()
}