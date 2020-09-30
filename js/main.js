'use strict';
var lndPage = document.querySelector('.landing-page'), //n9der njib l elemyn b l class name
    myBaar = document.getElementById('myBaar'),
    mylis = document.querySelectorAll('.links li'),
    myHeader = document.querySelector('header'),
    mySettings = document.querySelector('.settings-box'),
    myIconSnt = document.querySelector('.fa-sun'),
    myLiColors = document.querySelectorAll('.colors-list li'),
    mainColors = localStorage.getItem("color_option"),
    randomBackEl = document.querySelectorAll('.random-background span'),
    currentBackImage = localStorage.getItem("current-BackImage");

// start menu settings

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
/*open menu setting*/
myIconSnt.onclick = function(){
    lndPage.classList.toggle('filterB');
    mySettings.classList.toggle('open-settings');
    this.classList.toggle('turn-icon');
}
/* switch main color*/
// loop on all li
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

/* switch random background imgs*/
//random background option
let backgroundOption = true;

//variable to control the background intervale
let backgroundIntervale;

// check if there s local storage random background item

let backgroundLocalItem = localStorage.getItem('background-option');

//chekc if random background local storage is not empty
if(backgroundLocalItem !== null){
    //remove active class from all the childeren
    randomBackEl.forEach(span => {
        span.classList.remove('active');
    });
    
    if(backgroundLocalItem === 'true'){
        backgroundOption = true;
        document.querySelector('.random-background .yes').classList.add('active');
    }
    else{
        backgroundOption = false;
        document.querySelector('.random-background .no').classList.add("active");
    }
}

window.onload = function(){
    if(currentBackImage !== null){
        lndPage.style.backgroundImage = currentBackImage;
    }
    else{
        lndPage.style.backgroundImage = "url('images/img5.jpg')";
    }
}

// loop on all span
for(var c = 0; c < randomBackEl.length; c++){
    randomBackEl[c].onclick = function(){
        //remove active class from all the childeren
        randomBackEl.forEach(span => span.classList.remove('active'));
        // ADD active class on current child
        this.classList.add('active');

        if(this.getAttribute("data-background") === "yes"){
            backgroundOption = true;
            randomizeImgs();
        }
        else{
            backgroundOption = false;
            clearInterval(backgroundIntervale);
        }
        localStorage.setItem('background-option', backgroundOption);
    }
}


// end menu settings 
/*
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
*/

//elzero way change background img only js :

// get array of img
let imgsArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

//function to randomize imgs
function randomizeImgs(){
    if(backgroundOption === true){
        backgroundIntervale = setInterval(function(){
            // get Random number
            let rndomNum = Math.floor(Math.random() * imgsArray.length);
            // change background image URL
            lndPage.style.backgroundImage = "url('images/"+ imgsArray[rndomNum] +"')";
            localStorage.setItem('current-BackImage', "url('images/"+ imgsArray[rndomNum] +"')");
        }, 10000);
    }
}
randomizeImgs();
//end change background img only js :

//stop scrolling
function noScroll(){
    window.scroll(0,0);
}
/* show menu settings */
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

/*back to page on click op any element a*/
for(var i = 0; i < mylis.length; i++){
    mylis[i].onclick = function(){
        window.removeEventListener('scroll', noScroll);
        lndPage.classList.remove('returnMenu');
        myBaar.setAttribute('class', 'fas fa-bars');
        myHeader.style.backgroundColor = 'transparent';
    }
}

var pro = 0;
//start progress
var myProSpan1 = document.getElementById('span1'),
myProSpan2 = document.getElementById('span2');

var isTrue = true;
function progressFun(max, elmP){
    if(window.scrollY > 800 && isTrue == true)
    {
        var proIntervale = setInterval(function(){
            var Pwidth = pro.toString() + "%";
            elmP.style.width = Pwidth;
            pro++;
            if(pro > max){
                clearInterval(proIntervale);
            }
            isTrue = false;
        }, 30)
    }
}

window.onscroll = function(){
    progressFun(myProSpan1.getAttribute('data-width'), myProSpan1);
    progressFun(myProSpan2.getAttribute('data-width'), myProSpan2);
}

//end progress