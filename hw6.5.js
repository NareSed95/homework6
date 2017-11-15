const findWinner = function(board){
	let alart={};
	
	if((board[0][0] === board[1][0]) && (board[1][0] === board[2][0]) && (board[0][0] === board[2][0]))
	{
		
		if(board[0][0] === "o")
			alart=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 0], [1, 0], [2, 0]] 
			}; 
			if(board[0][0] === "x")
			alart=
			{
	    		winner: 'x',
	    		winningLocations: [[0, 0], [1, 0], [2, 0]] 
			};
	}
	if((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && (board[0][0] === board[2][2]))
	{
		
		if(board[0][0] === "o")
			alart=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 0], [1, 1], [2, 2]] 
			};
			if(board[0][0] === "x")
			alart=
			{
	    		winner: 'x',
	    		winningLocations: [[0, 0],[1, 1], [2, 2]] 
			};
	}
	if((board[0][1] === board[0][2]) && (board[0][0] === board[0][1]) && (board[0][0] === board[0][2]))
	{
		if(board[0][0] === "o")
			alart=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 0], [0, 1], [0, 2]] 
			};
			
			if(board[0][0] === "x")
			alart=	
			{
    			winner:"x",
    			winningLocations: [[0, 0],[0, 1],[0, 2]] 
			};
		
	} 
	if((board[0][1] === board[1][1]) && (board[1][1] === board[2][1]) && (board[0][1] === board[2][1]))
	{
		if(board[0][1] === "o")
			alart=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 1], [1, 1], [2, 1]] 
			};
			
		if(board[0][1] === "x")
			alart=
			{
	    		winner: 'x',
	    		winningLocations: [[0, 1], [1, 1], [2, 1]] 
			};
	}
	if((board[0][2] === board[1][2]) && (board[1][2] === board[2][2]) && (board[0][2] === board[2][2]))
	{
	
		if(board[0][2] === "o")
			alart=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 2], [1, 2], [2, 2]] 
			};
				if(board[0][2] === "x")
			alart=
			{
	    		winner: 'x',
	    		winningLocations: [[0, 2], [1, 2], [2, 2]] 
			};
	}
	if((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && (board[0][2] === board[2][0]))
	{
		
		if(board[0][2] === "o")
			alart=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 2],[1, 1], board[2, 0]] 
			};
			if(board[0][2] === "x")
			alart1=
			{
	    		winner: 'x',
	    		winningLocations: [[0, 2],[1, 1],[2, 0]] 
			};
	}
	if((board[1][0] === board[1][1]) && (board[1][0] === board[1][2]) && (board[1][1] === board[1][2]))
	{
	if(board[1][0] === "o")
			alart=
			{
	    		winner: 'o',
	    		winningLocations: [[1, 0], [1, 1], [1, 2]] 
			};
			
			if(board[1][0] === "x")
			alart=
			{
	    		winner: 'x',
	    		winningLocations: [[1, 0], [1, 1], [1, 2]] 
			};
		
	}
	if((board[2][0] === board[2][1]) && (board[2][0] === board[2][2]) && (board[2][1] === board[2][2]))
	{
    if(board[2][0] === "o")
			alart=
			{
	    		winner: 'o',
	    		winningLocations: [[2, 0], [2, 1], [2, 2]] 
			};
		if(board[2][0] === "x")
			alart=
			{
	    		winner: 'x',
	    		winningLocations: [[2, 0], [2, 1], [2, 2]] 
			};

	}
	let ended=true;
	for(let i=0;i<3;i++)
		for(let j=0;j<3;j++)
			if(board[i][j]===" ")
				ended=false;

	if(ended&&!alart.hasOwnProperty("wow winner"))
	alart=
	{
		winner: 'none'
	};
	if(alart.hasOwnProperty("wow winner"))
		return alart;
	else 
		return;
}