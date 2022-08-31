function showCode(element){
    element.style.display = "block";
}
function factorial(x){
    var f = 1;
    for (var i=1; i<=x;i++) {
        f*=i;
    }
    return f;
}

function prime(n){
var i,j,trace,t=1;
    for(i=3;t<=(n-1);i++){
        for(j=2;j<i;j++){
            if(i%j==0){
                trace=0;
                break;
            }
            else{
                trace=1;
            }
        }
        t=t+trace;
    }
    return i-1;
}


function solveQuadratic(a,b,c,output){
    var d=(b*b)-(4*a*c);				
    if (d>-1) {
      var	x1=(-b+Math.sqrt(d))/(2*a);								
				 var	x2=(-b-Math.sqrt(d))/(2*a);	
        output.innerHTML = "X =	"+ x1 + " , " + x2;
    }
    else {
        output.innerHTML = "opps! sorry. Roots are complex.🙂";
        }
    output.style.display = "block";
}











function countDigit(number,output){
    var number = parseInt(number);
    var remainder = 0;
    var sum = 0;
    var count = 0;
    while (number != 0) {
        remainder=number%10;
        sum=sum+remainder;
        number=parseInt(number/10);
        count++;
    }
    output.innerHTML= " total digit is: " + count + "<br>Summation of digits: " +sum;
    output.style.display = "block";
}


function generateFibonacci(term,output){
    output.innerHTML=" ";
    for(var c,a=-1,b=1,i=0;i<term;i++,c=a,a=b,b=c+b){  
        output.innerHTML += a+b + ", ";
   }
   output.style.display = "block";
}


function checkNumber(num,output){
var sum = 0, num1=num, rem= 0, sum1=0;
for (var i = 1; i < num; i++) {
    if (num % i == 0) {
        sum = sum + i;
    }
    else{
        continue;
    }
}
if (num == sum) {
    output.innerHTML = "it is perfect💯";
}
else{
    output.innerHTML = "sorry, not perfect🙂";
}
while (num1 != 0) {
rem = num1 % 10;
sum1 += factorial(rem);
num1=parseInt(num1/10);
}
if (num == sum1) {
    output.innerHTML += "<br>it is strong💪";
}
else{
    output.innerHTML += "<br>sorry, not strong🙂";
}
output.style.display = "block";
}


function generatePrime(input,output){
output.innerHTML = " ";
var count7 = 0;
for(var i = 1; prime(i)<= input;i++){
    if((prime(i)+2) == prime(i+1)){
            output.innerHTML +="<span style='color:darkred;'>"+prime(i)+"</span>" + ",";
        }
       else if((prime(i)-2) == prime(i-1)){
            output.innerHTML +="<span style='color:darkred;'>"+prime(i)+"</span>" + ", ";
          }
        else{
        output.innerHTML += prime(i) + ", ";
        }
        count7++;
    }
    output.innerHTML += "<br><br> Total " + count7+"<br><span style='color:darkred'>*Twins</span>";
    output.style.display="block";
}


