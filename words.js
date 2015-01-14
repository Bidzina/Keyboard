	$(document).ready(function(){

		var array = ["lorem", "ipsum", "simply", "dummy", "printing", "typesetting", "industry", "standard", "dummy", "text", "ever", "since", "unknown", "printer", "took", "galley", "type",  "scrambled",  "make", "specimen", "book", "survived", "five", "centuries", "leap"];
	var mas = [];

	for(var i=1; i<=35; i++){
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
	       	$('#words').find('span').eq(correct + wrong).addClass('green');
	 		correct++;
	       	
	       	mas.shift();	
	       	$("#inputtext").val("");
	       } else{
	       	$('#words').find('span').eq(correct + wrong).addClass('red');
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

		$('#timer').text("You have 35 sec");

		var once=false;
		$("#inputtext").keypress(function(){
		
		if(!once){
		
		var sec = 34;
		var timer = setInterval(function() { 
   		$('#timer').text("You have " + sec-- + " sec");
   		if (sec == -1) {
      	alert("finish");
      	clearInterval(timer);
   		} 
				}, 1000);

		once=true;
		}	

		});
		




	});

	

