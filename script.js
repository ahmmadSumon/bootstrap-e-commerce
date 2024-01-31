// const currentLocation = href.location;
// const menuItem = document.querySelectorAll(".nav-item a");
// const menuLength = menuItem.length;

// for(var i = 0; i < menuLength ; i++){
// if(menuItem[i].href === currentLocation){
//     menuItem[i].className = "active";
// }
// }

var mainImg = document.getElementById("main-img");
var smallImg = document.getElementsByClassName("small-img");
var sproBack = document.querySelector("#sproduct");


smallImg[0].onclick = function (){
    mainImg.src = smallImg[0].src;
   
}

smallImg[1].onclick = function (){
    mainImg.src = smallImg[1].src;
 
}

smallImg[2].onclick = function (){
    mainImg.src = smallImg[2].src;
 
}

smallImg[3].onclick = function (){
   
}
