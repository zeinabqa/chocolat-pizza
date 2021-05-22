let theEgg = document.getElementById('egg');
let eegsLabel = document.getElementById('eggLabel');
let granSugar = document.getElementById('granSugar');
let granLabel = document.getElementById('granLabel');
console.log(theEgg.checked);
if(theEgg.checked){
eegsLabel.style.textDecoration='line-through';
}

if(granSugar.checked){
    granLabel.style.textDecoration='line-through';
    }