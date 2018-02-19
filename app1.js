
function myFunction() 
{
    var x = document.getElementById("myText").value;
    var a = 0;
    var b = 1;
    var c = 0;
    result = [0,1];
    for(var i=2;i<x;i+=1)
    {
    	c = a + b;
    	a = b;
    	b = c;
    	result.push(c);
    }
    document.getElementById("demo").innerHTML = result;
    
}