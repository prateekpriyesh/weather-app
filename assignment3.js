var button = $("#button");
button.on('click',function(){
	console.log("Clicked");
})

var inputText = $("#input");
var output = $("#output");
console.log(output);
inputText.on('keyup', function(){
	var value = $(this).val();
	output.html(value);
})