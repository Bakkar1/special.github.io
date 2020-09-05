'use strict';
var lndPage = document.querySelector('.landing-page'), //n9der njib l elemyn b l class name
    myBaar = document.getElementById('myBaar'),
    mylis = document.querySelectorAll('.links li'),
    myHeader = document.querySelector('header'),
    mySettings = document.querySelector('.settings-box'),
    myIconSnt = document.querySelector('.fa-sun');

// start menu settings
/*open menu setting*/
var myLiColors = document.querySelectorAll('.colors-list li');

let mainColors = localStorage.getItem("color_option");
// chek if ther is local storage color option
if(mainColors !== null){
    // set the localstorage value on root
    document.documentElement.style.setProperty('--main-color', mainColors);
    myLiColors.forEach(elm => { 
        //remove active class from all the childeren
        elm.classList.remove('active');
        //add active class on element with data-color === color storage Item
        if(elm.getAttribute('data-color') === mainColors){
            elm.classList.add('active');
        }
    });
}
myIconSnt.onclick = function(){
    lndPage.classList.toggle('filterB');
    mySettings.classList.toggle('open-settings');
    this.classList.toggle('turn-icon');
}
/* switch main color*/
for(var c = 0; c < myLiColors.length; c++){
    myLiColors[c].onclick = function(){
        //remove active class from all the childeren
        myLiColors.forEach(elm => elm.classList.remove('active'));
        // ADD active class on current element
        this.classList.add('active');
        //get data-color
        var myColor = this.getAttribute('data-color');
        //set colors on root
        document.documentElement.style.setProperty('--main-color', myColor);
        //stoor color on local Storage
        localStorage.setItem("color_option", myColor);

    }
}

// end menu settings 

// change background img my way using css
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
    10000);

/*
//elzero way change background img only js :

// get array of img
let imgsArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]
setInterval(function(){
    // get Random number
    let rndomNum = Math.floor(Math.random() * imgsArray.length);
    // change background image URL
    lndPage.style.backgroundImage = "url('../images/"+ imgsArray[rndomNum] +"')";
}, 10000);
*/

function noScroll(){
    window.scroll(0,0);
}

myBaar.onclick = function(){
    lndPage.classList.toggle('returnMenu');
    if(myBaar.getAttribute('class') == 'fas fa-bars'){
        myBaar.setAttribute('class', 'fas fa-times');
        window.addEventListener('scroll', noScroll);
        myHeader.style.backgroundColor = 'rgba(0, 0, 0, .9)';
    }
    else{
        myBaar.setAttribute('class', 'fas fa-bars');
        window.removeEventListener('scroll', noScroll);
        myHeader.style.backgroundColor = 'transparent';
    }
}

for(var i = 0; i < mylis.length; i++){
    mylis[i].onclick = function(){
        window.removeEventListener('scroll', noScroll);
        lndPage.classList.remove('returnMenu');
        myBaar.setAttribute('class', 'fas fa-bars');
        myHeader.style.backgroundColor = 'transparent';
    }
}
