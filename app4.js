function myFunction3()
{
	var x = document.getElementById("factorial").value;
    result = 1;
    for(var i =2 ;i<=x;i+=1)
    {
        result = result*i;
    }
    document.getElementById("getfact").innerHTML = result;
}
