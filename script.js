function compute()
{
    var principal = document.getElementById("principal").value;
	var rate=document.getElementById("rate").value;
	var years=document.getElementById("years").value;
	var interest=principal*years*rate/100;

	var year=new Date().getFullYear()+parseInt(years);

            //Check if user enters zero or negative values
	  	if(principal <= "0" ){
 	       alert("Enter a positive number");
	        principalAmount.focus();
	        return false;
	  	}else{
	        document.getElementById("result").innerText="If you deposit "+principal+",\nat an interest rate of "+rate+"%.\nYou will receive an amount of "+interest+",\nin the year "+year;}
  
    
}
function updateRate(){

    var rateval=document.getElementById("rate").value;
            document.getElementById("rate_val").innerText=rateval+"%";
}
       


        
