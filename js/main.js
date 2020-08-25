'use strict';
var lndPage = document.getElementById('landing-page'),
    myBaar = document.getElementById('myBaar');

setInterval(function(){
    var rndNum = Math.floor(Math.random() *5) + 1;
    lndPage.classList.remove('img1','img2','img3','img4','img5');
    switch(rndNum)
        {
            case 1:
                lndPage.classList.add('img1');
                break;
            case 2:
                lndPage.classList.add('img2');
                break;
            case 3:
                lndPage.classList.add('img3');
                break;
            case 4:
                lndPage.classList.add('img4');
                break;
            case 5:
                lndPage.classList.add('img5');
                break;
        }
    },
    3000);

myBaar.onclick = function(){
    lndPage.classList.toggle('returnMenu');
    // lndPage.classList.toggle('fixedPo');
    if(myBaar.getAttribute('class') == 'fas fa-bars'){
        myBaar.setAttribute('class', 'fas fa-times')
        window.addEventListener('scroll', noScroll);
    }
    else{
        myBaar.setAttribute('class', 'fas fa-bars')
        window.removeEventListener('scroll', noScroll)
    }
}

function noScroll(){
    window.scroll(0,0);
}