var cross={};
cross.Event={};

cross.Event.addListener = function(element, name, handler, capture){
	capture = capture | false;
	
	if(element.addEventListener){ //표준브라우저
		element.addEventListener(name, handler, capture);
	}else{//구현IE
		element.attachEvent('on' + name, handler);
	}
}

cross.Event.stopBubble = function(event){
	if(event.stopPropagation){
		event.stopPropagation();
	}else{
		event.cancelBubble = true;
	}
}

//1.event객체 만드는법
//2.stopBubble함수 어디서 호출?