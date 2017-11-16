const canvas = document.getElementById("canvas");
			const context = canvas.getContext("2d");
			
			const backgroundImage = new Image();
			backgroundImage.src = "http://www.dreamtemplate.com/dreamcodes/bg_images/light/l3.jpg";
			
			const boarderImage = new Image();
			boarderImage.src = "http://cf.ltkcdn.net/kids/images/std/183272-300x248-tic-tac-toe-thumb.jpg";
			
			const xsymbolImage = new Image();
			xsymbolImage.src = "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/pink-jelly-icons-alphanumeric/073314-pink-jelly-icon-alphanumeric-x-solid.png" ;			
			
			const osymbolImage = new Image();
			osymbolImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Twemoji_2665.svg/2000px-Twemoji_2665.svg.png";
			
			
			
			let gameInProgress = true;  
			const random1 = function(num) {
				return Math.floor(Math.random() * num);
			};
			
			let startheart = (random1(2) === 1) ? true : false;
			
			canvas.addEventListener('click', function(gameday) {
					if(startheart && gameInProgress){	
						let a = Math.floor(gameday.offsetX/(canvas.width/3));
						let b = Math.floor(gameday.offsetY/(canvas.height/3));
						if(gameboarder[a][b] === ' '){
							gameboarder[a][b] = 'o';
							tie();
							if(!gameFinished())							
								startheart = !startheart;
						}
					}	else {
          	startheart = !startheart;
          }
				}, false); 
					
			const tie = function(){
				context.drawImage(backgroundImage, 0.5, 0.5, canvas.width, canvas.height);
				context.drawImage(boarderImage, 0.5, 0.5, canvas.width, canvas.height);
				
				for(let i = 0; i <= 2; i++)
					for(let j = 0; j <= 2; j++ ){
						if(gameboarder[i][j] === 'x')
							context.drawImage(xsymbolImage, i*(canvas.width/3), j*(canvas.height/3), canvas.width/3, canvas.height/3);
						else if(gameboarder[i][j] === 'o')
								context.drawImage(osymbolImage, i*(canvas.width/3), j*(canvas.height/3), canvas.width/3, canvas.height/3);
					}
			};
			
			const gameboarder = [
					[' ', ' ', ' '],
					[' ', ' ', ' '],
					[' ', ' ', ' ']
				];
			
			const ticTacToe = function(){
				tie();
				if(!startheart && gameInProgress){
					const state = nextMove(true);
					makeMove( true, state);	
					tie();
					if(!gameFinished())
						startheart = !startheart;
					else 
						startheart = false;
				}
				requestAnimationFrame(ticTacToe);
			};
			
			const gameFinished = function() {
				const findW = 	findWinner();
					if(typeof findW !==  'undefined'){
					gameInProgress = false;
						if(findW.winner === 'none'){
							setTimeout(function(){
								alert("You Both are Winners");
								clearBoard();
								gameInProgress = true;
							}, 600);
							
						}else{
							setTimeout(function(){
								alert("The winner is " + findW.winner + " " + findW.winningLocations);
								clearBoard();
								gameInProgress = true;
							}, 600);
							
						}	
						return true;
					}
					return false;
			};
			
			const clearBoard = function(){
				for(let i = 0; i <= 2; i++)
					for(let j = 0; j <= 2; j++ )
						gameboarder[i][j] = ' ';
			};
					
			const nextMove = function(stateX){
				let state = [random1(3), random1(3)];
				while(true){
					if(gameboarder[state[0]][state[1]] === ' ')
						break;
					state = [random1(3), random1(3)];	
				}			
				return	state;
			};
			
			const makeMove = function(stateX, state){
				if(state[0] < 0 && state[0]>2 && state[1] < 0 && state[1]>2)
					return -1;
				if(stateX)
					gameboarder[state[0]][state[1]] = 'x';
				else
					gameboarder[state[0]][state[1]] = 'o';
				return 0;
			};
			const fullBoard = function(){
				for(let i = 0; i <= 2; i++)
					for(let j = 0; j <= 2; j++ )
						if(gameboarder[i][j] === ' ')
							return false;
				return true;
			};
			
			const findWinner = function(){
				if(gameboarder[0][2] === gameboarder[1][1] && gameboarder[1][1] === gameboarder[2][0] && gameboarder[0][2]!== ' ')
					return  {
								winner: gameboarder[0][2],
								winningLocations: [[0, 2], [1, 1], [2, 0]] 
							}
				if(gameboarder[0][0] === gameboarder[1][1] && gameboarder[1][1] === gameboarder[2][2] && gameboarder[0][0]!== ' ')
					return  {
								winner: gameboarder[0][0],
								winningLocations: [[0, 0], [1, 1], [2, 2]] 
							} 
				
				for(let i = 0; i <= 2; i++){
					if(gameboarder[0][i] === gameboarder[1][i] && gameboarder[1][i] === gameboarder[2][i] && gameboarder[0][i]!== ' ')
					return  {
								winner: gameboarder[0][i],
								winningLocations: [[0, i], [1, i], [2, i]] 
							}
				for(let i = 0; i <= 2; i++){
					if(gameboarder[i][0] === gameboarder[i][1] && gameboarder[i][1] === gameboarder[i][2] && gameboarder[i][0]!== ' ')
					return  {
								winner: gameboarder[i][0],
								winningLocations: [[i, 0], [i, 1], [i, 2]] 
							}
				}
				}
				if(fullBoard())
					return {
								winner: 'none' 
								
					}
				return;
			
			};
			ticTacToe();
