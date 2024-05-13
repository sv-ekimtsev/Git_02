function over_button(){
    let but = document.querySelector('#button');
    but.style.color ='yellow';
    but.style.boxShadow ='inset 3px 3px 1px lightgray, inset -3px -3px 1px gray';
}


function out_button(){
    let but = document.querySelector('#button');
    but.style.color ='black';
    but.style.boxShadow ='none';
}

function click_button(){
    let but = document.querySelector('#button');
   
    but.style.boxShadow ='none';
    but.style.boxShadow ='inset 3px 3px 1px gray, inset -3px -3px 1px lightgray';

}
function unclick(){
    let but = document.querySelector('#button');
    but.style.color ='yellow';
    but.style.boxShadow ='inset 3px 3px 1px lightgray, inset -3px -3px 1px gray';
    let fon = document.querySelector('body');
    i++
    
    if(i == arrayColor.length){
        i = 0;
    }
    fon.style.backgroundColor = arrayColor[i];
}
let arrayColor = ['silver','black','#333333'];
let i = 0;