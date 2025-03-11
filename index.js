var randnuma=Math.floor(Math.random()*6+1);
var randnumb=Math.floor(Math.random()*6+1);

var randsrca="./images/dice"+randnuma+".png";
var randsrcb="./images/dice"+randnumb+".png";

var im=document.getElementsByClassName(".img1");
document.querySelector("img.img1").setAttribute("src",randsrca);
document.querySelector("img.img2").setAttribute("src",randsrcb);

if(randnuma>randnumb){
    document.querySelector("h3").textContent="Player 1 has won"
}else if(randnuma<randnumb){
    document.querySelector("h3").textContent="Player 2 has won"
}else if(randnuma==randnumb){
    document.querySelector("h3").textContent="It's a draw"
}
