var secondDiv = document.querySelector('.second-hand');
var minDiv = document.querySelector('.min-hand')
var hourDiv = document.querySelector('.hour-hand')
function setDate(){
    const now = new Date();
    
    const second = now.getSeconds();
    const secDeg = ((second/60)*360 +90);
    secondDiv.style.transform = `rotate(${secDeg}deg)`;

    const minute = now.getMinutes();
    console.log(minute)
    const minDeg =((minute/60)*360) + ((second/60)*6) +90
    minDiv.style.transform =`rotate(${minDeg}deg)`;

    const heur = now.getHours()
    const heurDeg = ((heur/12)*360) +((minute/60)+30)+90;
    hourDiv.style.transform =`rotate(${heurDeg}deg)`
}
setInterval(setDate,1000);

// afficher les seconde 

function masquerSeconde(){
$('.second-hand').hide()
$('.masquerSecond').hide()
$('.afficherSecond').show()

}
function afficherSeconde(){
    $('.second-hand').show()
    $('.masquerSecond').show()
    $('.afficherSecond').hide()

}