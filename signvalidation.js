  function welcome(){
			alert("Thank you for signing up with us");
		    window.location="homepage.html";	
}

   
      function validatefirst()
      {
      
         if(document.signform.firstname.value== "" )
         {
            alert( "Please provide your first name!" );
            document.signform.firstname.focus() ;
            return false;
         }

	if(document.signform.emailid.value== "" )
         {
            alert( "Please provide your emailid name!" );
            document.signform.emailid.focus() ;
            return false;
         }
	
	if(document.signform.contact.value== "" || document.signform.contact.value.length != 10)
         {
            alert( "Please provide your 10 digit contact no.!" );
            document.signform.contact.focus() ;
            return false;
         }

	

	 if( document.signform.zipcode.value == "" ||
         isNaN( document.signform.zipcode.value ) ||
         document.signform.zipcode.value.length != 6 )
         {
            alert( "Please provide a pincode with length 6" );
            document.signform.zipcode.value() ;
            return false;
         }
         
         if( document.signform.state.value == "-1" )
         {
            alert( "Please provide your state!" );
            return false;
         }
         return( true );

      }
   
