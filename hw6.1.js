const space = function(NumSpaces){
	if(NumSpaces === 0){
		return '';
	}
	return ' ' + space(NumSpaces-1);
};
const character = function(NumCharacters, char){
	if(NumCharacters === 0){
		return '';
	}
	return char + character(NumCharacters-1, char);
};
const helper = function(spc, str, char){
	if(spc<=0){
		return '';
	}
	console.log( space(spc) + character(str, char) );
	return helper(spc-1, str+2, char);
};
const printDiamondUp = function(height, char){
  if(height%3 === 0){
      return;
  }

  if((height-1)%3 === 0){
    
    if(((height-1)/2)%3 === 1){
      if(((height-1)/2)%3 === 1){
        helper(height-((height+1)/2-1), 1, char);
        
      }
      else{helper(height-2, 1, char);}
    }
    else{helper(height-((height+1)/2-1), 1, char);}
  }
};


const space1 = function(Num1Spaces){
	if(Num1Spaces === 0){
		return '';
	}
	return ' ' + space1(Num1Spaces-1);
};
const character1 = function(Num1Characters, char){
	if(Num1Characters === 0){
		return '';
	}
	return char + character1(Num1Characters-1, char);
};
const helper1 = function(spc1, str1, char){
	if(str1<=0){
		return '';
	}
	console.log( ' ' + space1(spc1) + character1(str1, char) );
	return helper1(spc1+1, str1-2, char);
};
const printDiamondDown = function(height1, char){
  if(height1%3 === 0){
    return;
  }else{helper1(1, height1-2, char);}
};


const printDiamond = function(height3, char){
	printDiamondUp(height3, char);

	printDiamondDown(height3, char);
};
printDiamond(7, '@');