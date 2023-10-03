

function calc()
 {
	var replaced=res.value;
	if(res.value.includes('÷') || res.value.includes('×'))
	{
		replaced = res.value.replaceAll('×','*').replaceAll('÷','/');
		res.value = eval(replaced);
	}
	res.value =eval(replaced);
}
