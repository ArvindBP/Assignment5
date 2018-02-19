function myFunction2()
{
	var x = document.getElementById("palcheck").value;
    var ch = ["yes","no"]; 
    var result = "name";
    var flag=0;
    var i=0;
    var j=x.length-1;
    for(;(i<(x.length-1)/2) && (flag==0);i+=1,j-=1)
    {
    	if(x[i]!=x[j])
    		flag=1;

    }
    if (flag ==1)
    	result=ch[1];
    else
    	result=ch[0];
    document.getElementById("check").innerHTML = result;
}