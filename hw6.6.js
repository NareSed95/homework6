const loop = function(){
	
	let sucO=nextMove(board,false);
	makeMove(board,sucO,false);

	if(findWinner(board)!=undefined)
		{	
			if(findWinner(board).winner==='none')
				alert("DeadHeat");
			else
				alert(findWinner(board).winner+"Congratulations");
			return;
		}	
	let sucX= nextMove(board,true);
	makeMove(board,sucX,true);		
	
	if(findWinner(board)!=undefined)
		{	
			if(findWinner(board).winner==='none')
				alert("DeadHeat");
			else
				alert(findWinner(board).winner+"Congratulations");
			return;
		}
		
	loop();
}
loop();