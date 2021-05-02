var canvas = new fabric.Canvas('myCanvas');

var canvasHeight;
var canvasWidth;

var player_x = 10 ;
var player_y = 10 ;

var player_object= "";
var block_image_object= "";

var block_image_width = 30;
var block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update() {
	console.log("block_image_height");
	fabric.Image.fromURL("images/player.png", function(Img) {
		player_object = Img;

		player_object.scaleToWidth(150);
		player_object.scaleToHeight(140);
		player_object.set({
			top:player_y,
			left:player_x
		});
		console.log("fabric.Image.fromURL");
		canvas.add(player_object);

	});
}

function new_image(get_image) {
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:player_y,
			left:player_x
		});

	canvas.add(block_image_object);

	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log("my_keydown:keyPressed-"+keyPressed);

	if(e.shiftKey == true && ( keyPressed == '80') ) { //shift+p(112)
		console.log("p and shift pressed together");
		block_image_width = block_image_width + 10;
		block_image_height = block_image_height + 10;
		document.getElementById("current_width").innerHTML = block_image_width;
		document.getElementById("current_height").innerHTML = block_image_height;	
	}

	if(e.shiftKey && ( keyPressed == '77' )) { //shift+m(109)
		console.log("m and shift pressed together");
		block_image_width = block_image_width - 10;
		block_image_height = block_image_height - 10;
		document.getElementById("current_width").innerHTML = block_image_width;
		document.getElementById("current_height").innerHTML = block_image_height;
	}

	if(keyPressed == '38') {
		up();
		console.log("up");
	}
	if(keyPressed == '40') {
		down();
		console.log("down");
	}
	if(keyPressed == '37') {
		left();
		console.log("left");
	}
	if(keyPressed == '39') {
		right();
		console.log("right");
	}

	if(keyPressed== '66') { //b
		new_image('images/spiderman_body.png');
		console.log("b");
	}

	if(keyPressed== '70') { //f
		new_image('images/ironman_face.png');
		console.log("f");
	}

	if(keyPressed == '76') { //I
		new_image('images/hulk_legs.png'); 
		console.log("i");
	}

	if(keyPressed == '82') { //r
		new_image('images/thor_right_hand.png'); 
		console.log("r");
	}

	if(keyPressed == '72') { //h
		new_image('images/captain_america_left_hand.png'); 
		console.log("h");
	}

	/*
	if(keyPressed == '87') {
		new_image('wall (1).jpg'); 
		console.log("w");
	}

	if(keyPressed == '71') {
		new_image('ground (2).png'); 
		console.log("g");
	}

	if(keyPressed == '84') {
		new_image('trunk (1).jpg'); 
		console.log("t");
	}
	
	if(keyPressed == '89') {
		new_image('yellow_wall (1).png'); 
		console.log("y");
	}

	if(keyPressed == '68') {
		new_image('dark_green (3).png'); 
		console.log("d");
	}

	if(keyPressed == '85') {
		new_image('uunique (2).png'); 
		console.log("u");
	}

	if(keyPressed == '67') {
		new_image('ccloud (2).jpg'); 
		console.log("c");
	}
	*/
	
}

function up() {
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down() {
	if(player_y <=250)
	{
		player_y = player_y + block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left() {
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right() {
	if(player_x <=480)
	{
		player_x = player_x + block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}