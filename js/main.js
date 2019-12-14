let myHeading = document.querySelector("h1");
var myButton = document.querySelector('button');
// myHeading.innerHTML = 'Hello world!!!';

var myImg = document.querySelector('img');
myImg.onclick = function(){
    var mySrc = myImg.getAttribute('src');
    if(mySrc === 'image/4.jfif'){
        myImg.setAttribute('src', 'image/3.jpg');
    }else{
        myImg.setAttribute('src', 'image/4.jfif');
    }
}

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }
  