// Eloquent JS, Chapter 2, exercise 3 (Chessboard)

var size = 8;
var grid = "";
for (var i = 0; i < size; i++) {
	
	for (var j = 0; j < size; j++) {

		//build the line
		if ((i+j) % 2 == 0) grid += " ";
		else grid += "#";
	}
	// start the next line
	grid += "\n";
}
console.log(grid);