var num=6;
var colors=generateRandomColors(num);

var col= document.querySelectorAll(".col");

var WinningColor = pickColor();

var h1 = document.getElementsByTagName("h1");
h1[0].textContent = WinningColor;

var reset= document.querySelector("#reset");
reset.addEventListener("click",function(){
	colors = generateRandomColors(num);
	for(var i=0;i<col.length;i++)
	{
		col[i].style.backgroundColor= colors[i];
	}
	WinningColor = pickColor();
	h1[0].textContent = WinningColor;
	reset.textContent= "New Colors";
	heading1.style.backgroundColor= "rgb(50, 90, 150)";
	result.textContent= "";

})

var easy= document.querySelector("#easy");
var hard=document.querySelector("#hard");
hard.addEventListener("click",function(){
	num=6;
	hard.classList.add("selected");
	easy.classList.remove("selected");
	colors = generateRandomColors(num);
	for(var i=0;i<col.length;i++)
	{
		col[i].style.backgroundColor= colors[i];
	}
	WinningColor = pickColor();
	h1[0].textContent = WinningColor;
	reset.textContent= "New Colors";
	heading1.style.backgroundColor= "rgb(50, 90, 150)";
	result.textContent= "";
})
easy.addEventListener("click",function(){
	num=3;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	for(var i=0;i<6;i++)
	{
		col[i].style.backgroundColor= "#232323";
	}
	colors = generateRandomColors(num);
	for(var i=0;i<col.length;i++)
	{
		col[i].style.backgroundColor= colors[i];
	}
	WinningColor = pickColor();
	h1[0].textContent = WinningColor;
	reset.textContent= "New Colors";
	heading1.style.backgroundColor= "rgb(50, 90, 150)";
	result.textContent= "";
})

var result = document.getElementById("result");
var heading1 = document.getElementById("heading1");

for(var i=0;i<col.length;i++)
{
	col[i].style.backgroundColor= colors[i];
	col[i].addEventListener("click",chosing);
}

function chosing(){
	//console.log(this.style.backgroundColor, WinningColor);
	 if(this.style.backgroundColor!==WinningColor)
	 {
	 	this.style.backgroundColor = "#232323";
	 	result.textContent= "Try Again";
	 }
	 else
	{
		//console.log(this.style.backgroundColor);
		for(var i=0;i<num;i++)
		{
			col[i].style.backgroundColor= WinningColor;
			result.textContent= "Correct";
			heading1.style.backgroundColor= WinningColor;
			reset.textContent= "Play Again?";

			//console.log(col[i].style.backgroundColor, WinningColor);
		}
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		var r= Math.floor(Math.random()*256);
		var g= Math.floor(Math.random()*256);
		var b= Math.floor(Math.random()*256);
		arr[i]="rgb("+r+", "+g+", "+b+")";
		//console.log(r,g,b,arr[i]);
	}

	return arr;
}

