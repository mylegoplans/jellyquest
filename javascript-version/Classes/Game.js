
window.Game = function(options) {
	this.DrawingContext = options.DrawingContext;
	this.Board = options.Board;
	this.Characters = [];
	this.Obstacles = [];
	this._intervalId = undefined;
	this._interval = options.RefreshInterval || 2000;

	// clear the board bydrawing a white rect on it 
	this._clearContext = function() {
		var c = this.DrawingContext;
		var dim = this.Board.Dimensions;
		// clear the canvas
		c.fillStyle = 'white';
		c.fillRect(0, 0, dim.Width, dim.Height);
	};

	this._drawObstacles = function(){
		//console.log('drawObstacles');
		// var ctx = this.DrawingContext;
		// ctx.beginPath();
		// ctx.lineWidth = 1;
		// ctx.strokeStyle = 'blue';
		// ctx.rect(300,120,150,100); 
		// ctx.stroke();


		// loop through all our obstacles and draw them on the screen
		for (var i in this.Obstacles) {
			// we get a reference to our obstacle:
			var obst = this.Obstacles[i];

			// we set the drawing context fill color
			this.DrawingContext.fillStyle = obst.Color;

			// then we draw a filled rectangle at obstacle Position and Size
			this.DrawingContext.fillRect(
				obst.Position.X, 
				obst.Position.Y, 
				obst.Size.Width, 
				obst.Size.Height
			);
		}
	};


	// draw only the characters
	this._drawCharacters = function() {
		for (var i in this.Characters) {

			// we get a reference to our character:
			var character = this.Characters[i];

			// // we set the drawing context fill color
			// this.DrawingContext.fillStyle = character.Color;

			// // then we draw a filled rectangle at X, Y of size 48 x 48
			// this.DrawingContext.fillRect(
			// 	character.Position.X, 
			// 	character.Position.Y, 
			// 	48, 
			// 	48
			// );

			this.DrawingContext.drawImage(
				character.Image, 
				character.Position.X, 
				character.Position.Y,
				26,
				41
			);
		}
	};


	// draw all the game itesm:
	this._drawGameItems = function(){
		// draw the obstacles
		this._drawObstacles();
		
		// invoke function this._drawCharacters and draws all the characer at their position
		this._drawCharacters();
	};

	// this will execute at an interval
	this._onInterval = function() {
		console.log('game onInterval');
		// clear the canvas
		this._clearContext();

		// invoke function that draws all the game items 
		this._drawGameItems();
	};

	this.start = function() {
		// TODO: start the game
		console.log('game started');
		// clear the canvas
		this._clearContext();

		this._intervalId = setInterval(this._onInterval.bind(this), this._interval);
	};

	this.pause = function() {
		clearInterval(this._intervalId);
	}
};
