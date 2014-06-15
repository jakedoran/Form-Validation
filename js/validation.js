function checkFormRed() {

	var userform = document.forms["myForm"];
	// var userName = userform.name;
	var userEmail = userform.email;
	var userSalary = userform.salary;
	var userMobile = userform.mobile;
	var userFirstName = userform.firstname;
	var userLastName = userform.lastname;
	var userMale = userform.male;
	var userYear = userform.year;
	var userMessage = userform.message;
	var userInterest = userform.interest;
	
	
	var error = false; // set to no error
	//document.getElementById("name_error").innerHTML = ""; // Reset name_error
	document.getElementById("email_error").innerHTML = ""; // Reset email_error
	document.getElementById("salary_error").innerHTML = ""; // Reset salary_error
	document.getElementById("mobile_error").innerHTML = ""; // Reset mobile_error
	document.getElementById("firstname_error").innerHTML = ""; // Reset firstname_error
	document.getElementById("lastname_error").innerHTML = ""; // Reset lastname_error
	document.getElementById("year_error").innerHTML = ""; // Reset lastname_error
	document.getElementById("message_error").innerHTML = ""; // Reset lastname_error
	document.getElementById("interest_error").innerHTML = ""; // Reset lastname_error


	if (userEmail.value == "") {
		error = true; // set error to true
		document.getElementById("email_error").innerHTML = "* Required";
		//userEmail.focus(); // cursor snaps to alert
	}
	if (userMobile.value == "") {
		error = true; // set error to true
		document.getElementById("mobile_error").innerHTML = "* Required";
		//userName.focus(); // cursor snaps to alert
	}
	if (userFirstName.value == "") {
		error = true; // set error to true
		document.getElementById("firstname_error").innerHTML = "* Required";
		//userName.focus(); // cursor snaps to alert
	}
	if (userLastName.value == "") {
		error = true; // set error to true
		document.getElementById("lastname_error").innerHTML = "* Required";
		//userName.focus(); // cursor snaps to alert
	}
	if (userYear.value < 1924 || userYear.value > 2007 || userYear.value == "0") {
		error = true; // set error to true
		document.getElementById("year_error").innerHTML = "* Invalid Year";
		//userName.focus(); // cursor snaps to alert
	}
	if (userMessage.value == "") {
		error = true; // set error to true
		document.getElementById("message_error").innerHTML = "* Required";
		//userName.focus(); // cursor snaps to alert
	}
	if (userSalary.value == "0") {
		error = true;
		document.getElementById("salary_error").innerHTML = "* Required";
	}
	if (userInterest.value == "0") {
		error = true;
		document.getElementById("interest_error").innerHTML = "* Required";
	}


	/* if (userSalary.value == "")
		error = true; // set error to true
		document.getElementById("salary_error").innerHTML = "* Required";
		userName.focus(); // cursor snaps to alert
	} */
	
		
	// sumbit check
	if (error == false) {
		userform.submit();
	}
	
} // end of function
