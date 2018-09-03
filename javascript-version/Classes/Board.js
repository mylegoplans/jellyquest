/*
class Board {

	Name: '';
	Dimensions: {
		Width: 200,
		Hight: 200
	};
	Walls: [];

	constructor(options) {
		this.Name = options.Name;
		this.Dimensions = options.Dimensions;
		this.Walls = options.Walls;
	}
}
*/

window.Board = function(options) {
	this.Name = options.Name;
	this.Dimensions = options.Dimensions;
	this.Walls = options.Walls;
};
