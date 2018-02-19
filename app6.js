function myFunction5()
{
	var arm= document.getElementById("arm1").value;
	var result1 = [];
	for(var i=1;i<=arm;i++)
	{
		var result =[];
		var num = i;
		var flag = 0;
		var sum=0;
		while(num>0)
		{
			result.push(num%10);
			num = parseInt(num/10);
		}
		for(var j=0;j<result.length;j++)
		{
			sum+=Math.pow(result[j],result.length);
		}
		if(i==sum)
			flag=1;
		if(flag==1)
			result1.push(i);
	}

	document.getElementById("getarm").innerHTML = result1;
	
}