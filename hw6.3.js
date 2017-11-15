const board = [
    ['x', 'o', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
  
  const random1 = function(num) {
      
     return Math.floor((Math.random() * num) + 1);
      
    };
  
  const nextMove = function(board,isX) {
    
	
 	let a = random1(3)-1;
	let b = random1(3)-1;
    

	while(board[a][b]!==' ')
      
	{
      
		a = random1(3)-1;
		b = random1(3)-1;
	} 
    
	return [a,b];
	
  };
   
