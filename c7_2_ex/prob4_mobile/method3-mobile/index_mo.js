window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;

}

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

function drawText(canvas, context) {
	var selectObj = document.getElementById("foregroundColor");
	var index = selectObj.selectedIndex;
	var fgColor = selectObj[index].value;

	context.fillStyle = fgColor;
	context.font = "bold 1.0em HyPost";
	context.textAlign = "left";
	context.fillText("이 트윗을 봅니다", 20, 40);

	context.font = "bold 1.0em HyPost";
	context.textAlign = "right";
	context.fillText("훌륭한 문구입니다 !", canvas.width - 20,
			canvas.height - 40);

}
function drawBird(canvas, context) {
	var twitterBird = new Image();
	var mirim = new Image();
	twitterBird.src = "twitterBird.png";mirim.src = "mirim.png";
	twitterBird.onload = function() {
	context.drawImage(twitterBird, 20, 120, 70, 70);
	context.drawImage(mirim, 250, 20, 70, 70);
	};

}

function drawOutline(canvas, context) {
context.lineWidth = 5;
context.strokeStyle = 'blue';
context.strokeRect(2, 2, canvas.width-4, canvas.height-4);
}



function degreesToRadians(degrees) {
	return (degrees * Math.PI) / 180;
	
}

