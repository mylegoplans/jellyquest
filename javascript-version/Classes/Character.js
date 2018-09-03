/*
class Character {
	// properties/attributes
	Id: -1;
	Name: '';
	Color: '';
	Position: {
		X: -1,
		Y: -1
	};

	constructor(options) {
		this.Id = options.Id;
		this.Name = options.Name;
		this.Color = options.Color;
		this.Position = options.Position;
	}

	// behavior/functionality
	sayHello() {
		console.log('Hello from ' + this.Name);
	}

	this.moveByX(x) {
		this.Position.X += x;
	}
}
*/

// ES5 supported by browser (Chrome)
window.Character = function(options) {
	// properties/attributes
	this.Id = options.Id;
	this.Name = options.Name;
	this.Color = options.Color;
	this.Position = options.Position;

	// behavior/functionality
	this.sayHello = function() {
		console.log('Hello from ' + this.Name);
	};

	this.moveByX = function(x) {
		this.Position.X += Number(x);
	};
};
