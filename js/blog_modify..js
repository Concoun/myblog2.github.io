function getId(id){
	return document.getElementById("id");
}

var getObj=getId("btn1");

getObj.onclick=function(){
	var div1Obj = document.getElementsByTagName("p");
	//遍历p标签并且更改其内容
	   for (var i = 0; i < div1Obj.length; i++) {
	div1Obj[i] .innerText = "成为秧歌Star";
   }
}
