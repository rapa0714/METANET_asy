let replyService =(function(){
		function create(){
			console.log('c');
		}
		function update(){
			console.log('u');
		}
		
		
		function getList(param, callback){
			let data ="결과값";
			callback(data);
		}		
		
		return {
			create: create,
			update: update,
			getList: getList
		}
		//js 중괄호는 객체, 대괄호는 배열
		

})();
