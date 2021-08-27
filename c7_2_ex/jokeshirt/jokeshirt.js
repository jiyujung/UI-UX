window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
}

var tweet;
var xmlhttp;

function previewHandler() {
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");

	fillBackgroundColor(canvas, context);

	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;

	if (shape == "squares") {
		for (var squares = 0; squares < 10; squares++) {
			drawSquare(canvas, context);
		}
	}
	if (shape == "circles") {
		for (var circles = 0; circles < 10; circles++) {
			drawCircle(canvas, context);
		}
	}

	if (shape == "lines") {
		for (var lines = 0; lines < 10; lines++) {
			drawLine(canvas, context);
		}
	}

	document.getElementById('previewButton').addEventListener('click', getJoke, false);
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = receiveJoke;

	drawText(canvas, context);
	drawBird(canvas, context);
	drawOutline(canvas, context);
}

// This is where we'll set the background color
function fillBackgroundColor(canvas, context) {
	var selectObj = document.getElementById("backgroundColor");
	var index = selectObj.selectedIndex;
	var bgColor = selectObj[index].value;
	context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

// This is where we'll set the background color
function fillBackgroundColor(canvas, context) {
	var selectObj = document.getElementById("backgroundColor");
	var index = selectObj.selectedIndex;
	var bgColor = selectObj[index].value;

	context.fillStyle = bgColor;
	context.fillRect(0, 0, canvas.width, canvas.height);

}

// Draws a square at a random location
function drawSquare(canvas, context) {
	var selectObj = document.getElementById("shapeColor");
	var index = selectObj.selectedIndex;
	var color = selectObj[index].value;

	var w = Math.floor(Math.random() * 30);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);

	context.fillStyle = color;
	context.fillRect(x, y, w, w);
}

// Draws a circle at a random location
function drawCircle(canvas, context) {
	var selectObj = document.getElementById("shapeColor");
	var index = selectObj.selectedIndex;
	var color = selectObj[index].value;

	var radius = Math.floor(Math.random() * 30);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);

	context.beginPath();
	context.arc(x, y, radius, 0, degreesToRadians(360), true);

	context.fillStyle = color;
	context.fill();
}

function drawLine(canvas, context) {
	var selectObj = document.getElementById("shapeColor");
	var index = selectObj.selectedIndex;
	var color = selectObj[index].value;

	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	var x2 = Math.floor(Math.random() * canvas.width);
	var y2 = Math.floor(Math.random() * canvas.height);

	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x2, y2);
	context.lineWidth = 10;
	context.strokeStyle = color;
	context.stroke();

}

function getJoke() {
	xmlhttp.open('GET', 'http://api.icndb.com/jokes/random/', true);
	xmlhttp.send();
}

function receiveJoke() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		var json = jQuery.parseJSON(xmlhttp.responseText);
		tweet = json.value.joke;
	}
}
// draws all the text, including the tweet
function drawText(canvas, context) {
	var selectObj = document.getElementById("foregroundColor");
	var index = selectObj.selectedIndex;
	var fgColor = selectObj[index].value;
	
	
	context.fillStyle = fgColor;
	context.font = "italic 0.5em serif";
	context.textAlign = "left";
	context.fillText("이 트윗을 봅니다", 10, 15);
	
	context.fillStyle = "black";
	context.font = "bold 0.6em sans-serif";
	selectObj = document.getElementById("tweets");

	if (tweet.length > 30) {
		var tweetLines = splitIntoLines(tweet);
		for (var i = 0; i < tweetLines.length; i++) {
			context.fillText(tweetLines[i], 10, 50+(i*25));
		}
	} else {
		context.fillText(tweet, 10, canvas.height-80);
	}

	context.fillStyle = fgColor;
	context.font = "bold 0.5em HyPost";
	context.textAlign = "right";
	context.fillText("훌륭한 문구입니다 !", canvas.width - 20,
			canvas.height - 10);
}

// draws the twitter bird image
function drawBird(canvas, context) {
	var twitterBird = new Image();
	var mirim = new Image();
	twitterBird.src = "./twitterBird.png";
	mirim.src = "./mirim.png";
	twitterBird.onload = function() {
	context.drawImage(twitterBird, 20, canvas.height-40, 30, 30);
	context.drawImage(mirim, canvas.width-40, 10, 30, 30);
	};

}

function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}

/*추가*/
function splitIntoLines(str) {
	var strs = new Array();
	var space = str.indexOf(' ', 25);
	strs[0] = str.substring(0, space);
	strs[1] = str.substring(space + 1);

	return strs;
}

/*추가*/