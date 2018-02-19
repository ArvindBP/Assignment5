function myFunction4()
{
	var op1= document.getElementById("oper1").value;
	var op2= document.getElementById("oper2").value;
	var ope= document.getElementById("opera").value;
	var result=1;
	if(ope =='+')
		result = parseInt(op1)+parseInt(op2);
	else if(ope=='-')
		result = op1-op2;
	else if(ope=='*')
		result= op1*op2;
	else if(ope=='/')
		result= op1/op2;
	else if(ope=='%')
		result= op1%op2;
	else
		result="Wrong operator";
	document.getElementById("getres").innerHTML = result;
}