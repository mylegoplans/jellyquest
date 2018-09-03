(function() {

	// get reference to start/end buttons
	var btnStart = document.getElementById('btnStart');
	var btnEnd = document.getElementById('btnEnd');

	// setup game
	// this is the main file that will run the program
	var canvas = document.getElementById('gameCanvas');
	
	// create board options and board
	var boardOptions = {
		Name: 'My board',
		Dimensions: {
			Width: 500,
			Height: 300
		},
		Walls: []
	};

	// create game options and game
	var gameOptions = {
		DrawingContext: canvas.getContext('2d'),
		RefreshInterval: 20,
		Board: new Board(boardOptions)
	};

	game = new Game(gameOptions);

	// create a Character called Bob
	var bob = new Character({
		Id: 1,
		Name: 'Bob',
		Color: '#FFFF00', // red/green/blue expressed RRGGBB 00-FF
		Position: {
			X: 10,
			Y: 5
		}
	});

	game.Characters.push(bob);

	// setup user input
	// hook up start/pause buttons
	btnStart.onclick = function() {
		// start the game
		game.start();
	};
	btnEnd.onclick = function() {
		game.pause();
	};
   
	var lastDownTarget;
	document.addEventListener('mousedown', function(event) {
        lastDownTarget = event.target;
        //alert('mousedown');
	}, false);
	
	const positionIncrease = 15;
    document.addEventListener('keydown', function(event) {
        if (lastDownTarget == canvas) {
			//console.log('keydown', event);
			var key = event.key.toLowerCase();
			switch(key) {
				case 'arrowright': {
					//move bob right
					bob.Position.X += positionIncrease;
					break;
				}
				case 'arrowleft': {
					//move bob left
					bob.Position.X -= positionIncrease;
					break;
				}
				case 'arrowup': {
					//move bob up
					bob.Position.Y -= positionIncrease;
					break;
				}
				case 'arrowdown': {
					//move bob down
					bob.Position.Y += positionIncrease;
					break;
				}
				default: {
					//console.log('we dont care: key is ', key);
				}

			}
        }
    }, false);

	// var wall = new Wall({
	// 	Id: 1,
	// 	Dimensions: {
	// 		Width: 20,
	// 		Height: 20
	// 	}
	// });
	// //console.log('wall', wall);

	// var bob = new Character({
	// 	Id: 1,
	// 	Name: 'Bob',
	// 	Color: 'yellow',
	// 	Position: {
	// 		X: 10,
	// 		Y: 5
	// 	}
	// });
	// bob.sayHello();
	// console.log('bobo position', bob.Position);
	// bob.moveByX(-3);
	// console.log('bobo new position', bob.Position);
	
	// // var burnt = new Character({
	// // 	Id: 2,
	// // 	Name: 'Burnt',
	// // 	Color: 'red'
	// // });
	// // burnt.sayHello();

	// var canvas = document.getElementById('gameCanvas');
	// var ctx = canvas.getContext('2d');
	// ctx.fillStyle = "#FF0000";
	// ctx.fillRect(20,20,50,50);

}());
