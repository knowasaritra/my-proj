var input=document.getElementById("input1");
//console.log(t);
var add=document.getElementById("add");
//console.log(t);
//console.log(button);
var x=document.getElementsByTagName("button");

var length;
var listArr=[];
var parentArr=[];
var i;
add.addEventListener("click",function()
{
	if(input.value!=="")
	{		
		var text=input.value;
		var listElement=document.createTextNode(text);
		var list=document.createElement("LI");
		list.id=input.value;
		list.classList.add("done");
		list.appendChild(listElement);
		var listParent=document.getElementById("list");
		listParent.appendChild(list);
		var deleteTxt=document.createTextNode("delete");
		var deleteBtn=document.createElement("button");
		deleteBtn.id=input.value+"del";
		deleteBtn.classList.add("delete");
		listArr.push(deleteBtn.id);
		parentArr.push(input.value);
		deleteBtn.appendChild(deleteTxt);
		list.appendChild(deleteBtn);
		input.value=""
	}
})
add.addEventListener("click",function()
{
	//length=list.classList.length;
	if(listArr.length>0)
	{
		for(var i=0;i<listArr.length;i++)
		{
			var done=document.getElementsByClassName("done")[i];
			done.addEventListener("click",function()
			{
				done.style.cssText=`
				text-decoration: line-through;`
			})
		}
	}
})
add.addEventListener("click",function(){
	if(listArr.length!=0)
	{	
	for(var i=0;i<listArr.length;i++)
	{
		var deleteBtn=document.getElementById(listArr[i]);
		var listEl=document.getElementById(parentArr[i]);
		deleteBtn.addEventListener("click",function()
			{			
				deleteBtn.remove();
				listEl.remove();
				listArr.splice(listArr[i]);
				parentArr.splice(parentArr[i]);
			})
	}
	}
})
