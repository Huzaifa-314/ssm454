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









const btn4 = document.getElementById('btn4');
const btn41=document.getElementById('btn41');
			const out4=document.querySelector('#output4');
			var number = document.getElementById('txt4');
			document.querySelector(".output4").style.display = "none";
			function fun4(){
				
				var remainer = 0;
				var count = 0;
				var sum = 0;
				while (number != 0) {
					remainer = number % 10;
					sum = sum + remainer;
					number = parseInt(number / 10);
					count++;
					
				}
				out4.innerHTML=sum;
				document.querySelector(".output4").style.display = "block";
			}
			btn4.addEventListener('click', fun4);
			document.getElementById("output41").style.display = "none";
			btn41.addEventListener("click", function(){
  			document.getElementById("output41").style.display = "block";
			});
