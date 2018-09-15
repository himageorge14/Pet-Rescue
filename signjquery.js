$(document).ready(function(){

	$("#submitButton").click(function(){

		var firstName=$("#inputFirst4").val();
		var lastName=$("#inputLast4").val();
		var emailId=$("#inputEmail4").val();
		var contactNo=$("#inputContact4").val();
		var pinCode=$("#inputZip").val();

		var email_regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
		var zip_regex = /^[0-9]+$/;


		if(firstName.length==0){
			$("#invisibleText").text("Please enter your First Name");
			return false;
			
		}
		if(lastName.length==0){
			$("#invisibleText").text("Please enter your Last Name");
			return false;
			
		}
		if(emailId.length==0 || !emailId.match(email_regex )){
			$("#invisibleText").text("Please enter your Emailid of correct format");
			return false;
			
		}
		if(contactNo.length!=10){
			$("#invisibleText").text("Please enter your contact number of length 10");
			return false;
			
		}
		if(pinCode.length!=6 || !pinCode.match(zip_regex)){
			$("#invisibleText").text("Please enter your zip code of length 6");
			return false;
			
		}


	})

})