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