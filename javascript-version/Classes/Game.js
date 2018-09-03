
window.Game = function(options) {
	this.DrawingContext = options.DrawingContext;
	this.Board = options.Board;
	this.Characters = [];
	this._intervalId = undefined;
	this._interval = options.RefreshInterval || 2000;

	// clear the context 
	this._clearContext = function() {
		var c = this.DrawingContext;
		var dim = this.Board.Dimensions;
		// clear the canvas
		c.fillStyle = "#EEE";
		c.fillRect(0, 0, dim.Width, dim.Height);
	};

	// draw only the characters
	this._drawCharacters = function() {
		for (var i in this.Characters) {

			// we get a reference to out character:
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

	// this will execute at an interval
	this._onInterval = function() {
		console.log('game onInterval');
		// clear the canvas
		this._clearContext();

		// invoke function this._drawCharacters and draws all the characer at their position
		this._drawCharacters();
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
