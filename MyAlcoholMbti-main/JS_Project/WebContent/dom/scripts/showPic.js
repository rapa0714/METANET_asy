	function showPic(obj){
		let source = obj.getAttribute("href");
		let placeholder = document.getElementById("placeholder");
		placeholder.setAttribute("src", source);
		
		let title = obj.getAttribute("title");
		let title1 = document.getElementById("description")
		if(description.firstChild.nodeType ==3){
			description.firstChild.nodeValue=title;
		}
	}
	
	
	function prepareGallery(){
		let ig = document.getElementById("imagegallery");
		let links = ig.getElementsByTagName("a"); //a들
		
		for(let i=0; i<links.length; i++){
			links[i].addEventListener('click', function(e) {//e만 적어도 이벤트가 자동으로 넘어옴. 이벤트핸들러함수이기때문.
				e.preventDefault();//기본 이벤트를 취소
				showPic(this); //이벤트함수에서 this는 links
			}, false)
		}
	}
	window.onload = prepareGallery;