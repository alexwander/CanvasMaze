var canvas;
var context;

// The current face position.
var x = 0;
var y = 0;

// The current face speed (in both direction).
var dx = 0;
var dy = 0;

window.onload = function() {
  // Set up the canvas.
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  // ** New code for local storage. **
  var x = 268;
  var y = 5;
  if (typeof localStorage !== "undefined") {
    var savedX = localStorage.getItem("mazeGame_currentX");
    var savedY = localStorage.getItem("mazeGame_currentY");
    if (savedX != null) x = Number(savedX);
    if (savedY != null) y = Number(savedY);
  }

  // Draw the maze background.
  drawMaze("maze.png", x, y);

  // When the user presses a key, run the processKey() function.
  window.onkeydown = processKey;
};

}