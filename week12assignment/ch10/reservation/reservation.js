$(document).ready(function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	$("#Submit").click(function(){
		var arrivaldate=$("#arrival_date").val();
		var nights=$("#nights").val();
		var name=$("#name").val();
		var email=$("#email").val();
		var phone=$("#phone").val();
		var isValid=true;
		
		//Validate the first arrivaldate
		
		if(arrivaldate=="")
		{
			$("#arrival_date").next().text(
			"This text field is required.");
			isValid=false;
		}else
		{
			$("#arrival_date").next().text("");
		}
		
		// validate the nights
		
		 if (isNaN(nights))
		 {
			   $("#nights").next().text(" Enter a numeric value.");
			   isValid=false;
		 }
			else
		 {
			   $("#nights").next().text(" ");
		 }
		  
	  
		
		//validate name
		
		if(name=="")
		{
			$("#name").next().text("This field is required");
			isValid=false;
		}	
			else
		{
			$("#name").next().text("");
		}
		
		//validate email
		
		  if(email=="")
		{
		  $("#email").next().text(" This field is required. ");
		  isValid=false;
		  
		  
		}
			else 

		{	
			if(!emailPattern.test($("#email").val()))
		{
		
			$("#email").next().text("Invalid!! Email Address");
			isValid=false;
		}
			else
		{ 
			$("#email").next().text(" ");}
		 
		  
		}
		
		//validate phone
		
		if(phone=="")
		{
			$("#phone").next().text("This field is required");
			isValid=false;
		}else
		{
			$("#phone").next().text("");
		}
		
		//submit 
		
		if(isValid)
		{
			$("#reservation_form").submit();
		}
		
	});
	$("#arrival_date").focus();
}); // end ready