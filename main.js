var can = document.getElementById("myCanvas").innerHTML;
var ctx = can.getContext("2d");

var img_width = 300;
var img_height = 100;

var img_image;

var img_x = 100;
var img_y = 100;

function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;
}

function uploadimg() {
	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

windows.addEventListener("keydown" , my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			img_image = "Alpkey.png";
			aplhabetkey();
			document.getElementById("d1").innerHTML="You pressed a Alphabet Key";
			xonsole.log("FUNNY");
		}
		
		if(keyPressed >=48 && keyPressed<=57){
			img_image = "numkey.png";
			numkey();
			document.getElementById("d1").innerHTML="You pressed a Number Key";
		}
		
		if(keyPressed ==17); (keyPressed ==18); (keyPressed ==27); {
			img_image = "spkey.png";
			specialkey()
			document.getElementById("d1").innerHTML="You pressed a Special Key";
		}
}

function aplhabetkey(){
	img_image="Alpkey.png";
	add();
}

function numberkey(){
	img_image="numkey.png";
	add();
	
}

function arrowkey(){
	img_image="Arrkey.png";
	add();
}

function specialkey(){
	img_image="spkey.png";
	add();
}

function otherkey(){
	img_image="otherkey.png";
	add();
}