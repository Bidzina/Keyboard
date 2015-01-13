	$(document).ready(function(){

		var array = ["lorem", "ipsum", "simply", "dummy", "printing", "typesetting", "industry", "standard", "dummy", "text", "ever", "since", "unknown", "printer", "took", "galley", "type",  "scrambled",  "make", "specimen", "book", "survived", "five", "centuries", "leap"];
	var mas = [];

	for(var i=1; i<=33; i++){
		$("#word" + i).html(array[Math.floor(Math.random()*array.length)]);
		mas[i]=$("#word"+i).text();

	}



	var correct = 0;
	var wrong = 0;

	$('#words').find('span').eq(correct + wrong).addClass('active');
	$('#inputtext').keyup(function(e){
	   	if(e.keyCode == 32){
	       	var x = $("#inputtext").val();

	       	$('#words').find('span').eq(correct + wrong).removeClass('active');

	       	if(x.trim() == mas[1]){
	       	correct++;
	       	mas.shift();	
	       	$("#inputtext").val("");
	       } else{
	       	wrong++;
	       	mas.shift();
	       	$("#inputtext").val("");
	       }

	       $('#words').find('span').eq(correct + wrong).addClass('active');
	   }

	   	$('#result1').html("Your correct answear is: " + correct);
		$('#result2').html("Your wrong answer is: " + wrong);
	   
	});

		$('#result1').html("Your correct answear is: " + correct);
		$('#result2').html("Your wrong answer is: " + wrong);





	});

	

