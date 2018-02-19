function myFunction1()
{
	var x = document.getElementById("primeno").value;
	var result1 =[];
	for(var i = 2;i<=x;i+=1)
	{
		var flag = 0;
		for(var j=i-1;j>1;j-=1)
		{
			if(i%j==0)
				flag =1;
		}
		if(flag==0)
			result1.push(i);
		
	}
	document.getElementById("display").innerHTML = result1;
}