const btn1= document.getElementById('btn1');
			const out1=document.querySelector('#output1');
			
			
			
			
			document.querySelector(".output1").style.display = "none";
			function fun1(){
				var txt1=document.getElementById('txt1');
				if (txt1.value==1) {
					out1.innerHTML = "Saturday";
				}
				if(txt1.value==2){
					out1.innerHTML = "Sunday";
				}
				if(txt1.value==3){
					out1.innerHTML = "Monday";
				}
				if(txt1.value==4){
					out1.innerHTML = "Tuesday";
				}
				if(txt1.value==5){
					out1.innerHTML = "Wednessday";
				}
				if(txt1==6){
					out1.innerHTML = "Thrusday";
				}
				if(txt1.value==7){
					out1.innerHTML = "Friday";
				}
				if(txt1.value<1 || txt1.value>7){
					out1.innerHTML = "Invalid! Enter 1 to 7";
				}
				document.querySelector(".output1").style.display = "block";
			}
			btn1.addEventListener('click', fun1);
			document.getElementById("output11").style.display = "none";
			btn11.addEventListener("click", function(){
  			document.getElementById("output11").style.display = "block";
			});





			const btn2= document.getElementById('btn2');
			var out2=document.querySelector('#output2');
			document.querySelector(".output2").style.display = "none";
			function fun2(){
				var in21=document.getElementById('in21');
				var in22=document.getElementById('in22');
				var in23=document.getElementById('in23');
				if (in21.value<in22.value) {
						if (in22.value<in23.value) {
								out2.innerHTML = in23.value+" is greatest";
						}
						else {
							out2.innerHTML = in22.value+" is greatest" ;
						}
				}
				else{
						if (in21.value>in23.value) {
								out2.innerHTML = in21.value+" is greatest";
						}
						else {
							out2.innerHTML = in23.value+" is greatest" ;
						}
				}
				document.querySelector(".output2").style.display = "block";
			}
			btn2.addEventListener('click', fun2);
			document.getElementById("output21").style.display = "none";
			btn21.addEventListener("click", function(){
  			document.getElementById("output21").style.display = "block";
			});





			const btn3= document.getElementById('btn3');
			const btn31=document.getElementById('btn31');
			var out3=document.querySelector('#output3');
			document.querySelector(".output3").style.display = "none";
			function fun3(){
				var in31=document.getElementById('in31');
				var in32=document.getElementById('in32');
				var in33=document.getElementById('in33');
				var d=((in32.value)*(in32.value))-(4*(in31.value)*(in33.value));
				if (d>-1) {
				var	x1=((-in32.value+Math.sqrt(d))/(2*in31.value));
				var x2=((-in32.value-Math.sqrt(d))/(2*in31.value));
					out3.innerHTML = "X =	"+ x1 + " , " + x2;
				}
				else {
					out3.innerHTML = "opps! sorry. Roots are complex.";
				}
				document.querySelector(".output3").style.display = "block";
			}
			btn3.addEventListener('click', fun3);
			document.getElementById("output31").style.display = "none";
			btn31.addEventListener("click", function(){
  			document.getElementById("output31").style.display = "block";
			});











var txt4 = document.getElementById("txt4");
var btn4 = document.getElementById("btn4");
var out4 = document.getElementById("output4");
out4.style.display = "none";
function fun4(){
var number = parseInt(txt4.value);
var remainder = 0;
var sum = 0;
var count = 0;
while (number != 0) {
remainder=number%10;
sum=sum+remainder;
number=parseInt(number/10);
count++;
}
out4.innerHTML= " total digit is: " + count + ".  Summation of digits: " +sum;
out4.style.display = "block";
}
btn4.addEventListener('click',fun4);


var btn41=document.getElementById("btn41");
document.getElementById("output41").style.display = "none";

document.getElementById("btn41").addEventListener('click',function(){
    document.getElementById("output41").style.display = "block";
});















var txt5 = document.getElementById("txt5");
var btn5 = document.getElementById("btn5");
var out5 = document.getElementById("output5");
out5.style.display = "none";
function fun5(){
out5.innerHTML = " ";
for(var c,a=-1,b=1,i=0;i<txt5.value;i++,c=a,a=b,b=c+b){

out5.innerHTML += (a+b)+", ";}
out5.style.display = "block";
}
btn5.addEventListener('click',fun5);


var btn51=document.getElementById("btn51");
document.getElementById("output51").style.display = "none";

document.getElementById("btn51").addEventListener('click',function(){
    document.getElementById("output51").style.display = "block";
});






var txt6 = document.getElementById("txt6");
var btn6 = document.getElementById("btn6");
var out6 = document.getElementById("output6");
out6.style.display = "none";
function fun6(){

var num = txt6.value;
var sum = 0;
for (var i = 1; i < num; i++) {
    if (num % i == 0) {
        sum = sum + i;
    }
    else{
        continue;
    }
}
if (num == sum) {
    out6.innerHTML = "it is perfect :)";
}
else{
    out6.innerHTML = "sorry, not perfect :)";


//var rem = 0;
//var sumStr = 0;
//while (num != 0) {
//rem = num % 10;
//for (var i =1; i <= rem; i++) {
  //  var 
  //  fact = fact
//}
//sum=sum+remainder;
//number=parseInt(number/10);
//count++;
//}


out6.style.display = "block";
}
btn6.addEventListener('click',fun6);


var btn61=document.getElementById("btn61");
document.getElementById("output61").style.display = "none";

document.getElementById("btn61").addEventListener('click',function(){
    document.getElementById("output61").style.display = "block";
});


