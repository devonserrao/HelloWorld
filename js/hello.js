const i=7;
function hi()
{
	if(0 == "0" && 0 == '0' && "0" == '0')
	{
		var s = [
			"Hello","World",'!',9
		];
		var len =  s.length;
		var j = s;
		
		for(let s = 0; s < len; s++ ) //THIS s overrides global s and creates a local s because of let
			console.log(j[s]);
		
		let i = 5;  //Creates a local i coz of let
		
		for(let i=0; i<len; i++)
			console.log(s[i]);
		console.log(i);
		
	}
	console.log(i);
}
