function insertAdmin() {
	var users= JSON.parse(localStorage.getItem("users") || "[]");
	var admin1 = {
		id: 1,
		 lastName: "Admin1",
		 firstName: "Admin1",
		email: "Admin1@gmail.com",
		password: "Admin1!",
		tel: 25856223,

		role: "admin",

	}
	var admin2 = {
		id: 2,
		lastName: "Admin2",
		firstName: "Admin2",
		email: "Admin2@gmail.com",
		password: "Admin2!",
		tel: 25856224,
		role: "admin",

	}
	var admin3 = {
		id: 3,
		lastName: "Admin3",
		firstName: "Admin3",
		email: "Admin3@gmail.com",
		password: "Admin3!",
		tel: 25856227,

		role: "admin",

	}
	users.push(admin1, admin2, admin3);
	localStorage.setItem("users", JSON.stringify(users));
	 localStorage.setItem("AdminsAdded",true) ;

}
function signupP() {
	var test = true;
	var firstName = document.getElementById("firstName").value;
    var users= JSON.parse(localStorage.getItem("users") || "[]")

	if (firstName.length < 3) {
		document.getElementById("errorFirstName").innerHTML = "firstName must have at least 3 character";
		document.getElementById("errorFirstName").style.color = "red";
		test = false;
	}
	var lastName = document.getElementById("lastName").value;

	if (lastName.length < 3) {
		document.getElementById("errorLastName").innerHTML = "lastName must have at least 3 character";
		document.getElementById("errorLastName").style.color = "red";
		test = false;
	}


	var email = document.getElementById("email").value;
	
	if (verifEmailExist(email,users)) {
		document.getElementById("errorEmailExist").innerHTML = "email already exist";
		document.getElementById("errorEmailExist").style.color = "red";
		test = false;
	}
	else { document.getElementById("errorEmailExist").innerHTML = "" };
	var validateemail = validateEmail(email);
	if (!validateemail) {
		document.getElementById("validateEmailError").innerHTML = "invalid email";
		document.getElementById("validateEmailError").style.color = "red";
		test = false;
	}
	else { document.getElementById("validateEmailError").innerHTML = "" }


	var password = document.getElementById("password").value;

	if ((password.length < 8) || (password.length > 16)) {
		document.getElementById("errorPassword").innerHTML = "Password must have number of chars between 8 and 16"
		document.getElementById("errorPassword").style.color = "red";
		test = false;
	}
	else { document.getElementById("errorPassword").innerHTML = "" }
	var confirmPassword = document.getElementById("confirmPassword").value;
	if (confirmPassword != password) {
		document.getElementById("errorConfirmPassword").innerHTML = "Password must have match"
		document.getElementById("errorConfirmPassword").style.color = "red";
		test = false;
	} else { document.getElementById("errorConfirmPassword").innerHTML = "" }
	var tel = document.getElementById("tel").value;


	verification("errorTel", " tel must have 8 number", (tel.length != 8))


	var iduser= generateId(users);
	if (test) {
		var user = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
			tel: tel,
			id: iduser,
			role: "patient",
		}

		users.push(user);
		localStorage.setItem("users", JSON.stringify(users ));






	}
}
function signupDoc() {

    var users = JSON.parse(localStorage.getItem("users") || "[]");
	var test = true;
	var firstName = document.getElementById("firstName").value;

	verification("errorfirstName", "firstName must have at least 3 character", (firstName.length < 3))
	var lastName= document.getElementById("lastName").value;
	verification("errorlastName", "lastName must have at least 3 characte", (lastName.length < 3))


	var password = document.getElementById("password").value;

	if ((password.length < 8) || (password.length > 16)) {
		document.getElementById("errorPassword").innerHTML = " Password must  have at least 8 char max 16 chars	"
		document.getElementById("errorPassword").style.color = "red";
		test = false;
	}
	else { document.getElementById("errorPassword").innerHTML = "" }
	var confirmPassword = document.getElementById("confirmPassword").value;
	if (confirmPassword != password) {
		document.getElementById("errorConfirmationPassword").innerHTML = "Password not conformed"
		document.getElementById("errorConfirmationPassword").style.color = "red";
		test = false;
	} else { document.getElementById("errorConfirmationPassword").innerHTML = "" }
	var users = JSON.parse(localStorage.getItem("users") || "[]");
	var email = document.getElementById("email").value;
	if (verifEmailExist(email,users)) {
		document.getElementById("errorEmailExist").innerHTML = "email already exist";
		document.getElementById("errorEmailExist").style.color = "red";
		test = false;
	}
	else { document.getElementById("errorEmailExist").innerHTML = "" };

	var validateemail = validateEmail(email);
	if (!validateemail) {
		document.getElementById("validateEmailError").innerHTML = " email invalide";
		document.getElementById("validateEmailError").style.color = "red";
		test = false;
	}
	else { document.getElementById("validateEmailError").innerHTML = "" }


   
   var governorat= document.getElementById("governorat").value;
   verification("errorGovernorat", "you have to select your governorat", (governorat.length < 1))

	var tel = document.getElementById("tel").value;
 console.log(tel);

	verification("errorTel", "error phone number must have 8 number", (tel.length != 8))

	var address = document.getElementById("address").value;
	var idUser= generateId(users);
	localStorage.setItem("idDocnonConform",idUser)
	var specialty=document.getElementById("specialty").value;
	verification("errorSpecialty", "you have to select your specialty", (specialty.length < 1))
	
	
	
	if (test) {
		var user= {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
			tel: tel,
			id: idUser,
			role: "doctor",
			address: address,
			governorat:governorat,
			
			specialty:specialty,
			
            statut:"Notconfirmed"
		}

		users.push(user);
		localStorage.setItem("users", JSON.stringify(users));






	}
	
	// location.reload()

}function verification(spanId, msg, condition) {

	if (condition) {

		document.getElementById(spanId).innerHTML = msg;
		document.getElementById(spanId).style.color = "red";
		test = false;
	} else { document.getElementById(spanId).innerHTML = "" }

}
function verifEmailExist(email, T) {
	var users = JSON.parse(localStorage.getItem("users") || "[]")
	var exist = false
	for (let i = 0; i < T.length; i++) {
		if (T[i].email == email) {
			exist = true;
			break;

		}
	}
	return exist;
}
function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}
function generateId(T) {
	var max = 0;
	if (T.length == 0) {
		return (max + 1)

	} else {
		for (let i = 0; i < T.length; i++) {
			if (T[i].id > max) {
				max = T[i].id
			}
		}
	}

	return max + 1 }
	
function login() {
     
	var email = document.getElementById("email").value ;
	var password =document.getElementById("password").value ;
	var idUserfound ;
	 var userfound ;
	  var users = JSON.parse(localStorage.getItem("users")||"[]");
	 for (let i = 0; i < users.length; i++) { 
		 if (users[i].email==email&& users[i].password==password) {
		 userfound=users[i];
		 idUserfound=users[i].id;
		 break ;
		 
	 }
 }
	 if (userfound) {
 
		 localStorage.setItem("connectituser",JSON.stringify(userfound))
		 localStorage.setItem("idUserfound",JSON.parse(idUserfound))
		
		
		 switch (userfound.role) {
			 case "patient":
				 location.replace("search.html")
				 
				 break;
		 
			 case "admin":
				 location.replace("dashboard.html")
				 break;
			 case "doctor":
				 if (userfound.statut=="Notconfirmed") {
					 location.replace("profil.html")
					 
				 }
				 if (userfound.statut=="Confirmed"){
				 location.replace("appointment.html")}
				 break;
		 }
		 
	 } else {document.getElementById("ERROR").innerHTML="ERROR";
		 document.getElementById("ERROR").style.color="red"  ;}
		
		 
	
 
	 
 }

 	
 function search() {

	var users = JSON.parse(localStorage.getItem("users") || "[]");
	var searchSpeciality = document.getElementById("specialty").value;
	console.log( "speciality is",searchSpeciality );
	var searchGouvernorat = document.getElementById("governorat").value;
	var doctorCart = ``
	var  connectituser= JSON.parse(localStorage.getItem("connectituser"))
	var x=0;
	if (connectituser) {
	for (let i = 0; i < users.length; i++) {
		if ((users[i].specialty == searchSpeciality && searchGouvernorat == "" && users[i].role == "doctor") ||
			(users[i].governorat == searchGouvernorat && searchSpeciality ==""&& users[i].role == "doctor") ||
			(users[i].specialty== searchSpeciality && users[i].governorat == searchGouvernorat && users[i].role == "doctor")) {
			doctorCart += ` <div class="col-md-4 col-sm-6">
			<div class="team-thumb wow fadeInUp" data-wow-delay="0.2s">
				 <img src="images/team-image1.jpg" class="img-responsive" alt="">

					  <div class="team-info">
						   <h3>${users[i].firstName}${users[i].lastName}</h3>
						   <p>${users[i].address}</p>
						   <div class="team-contact-info">
								<p><i class="fa fa-phone"></i> ${users[i].tel}</p>
								<p><i class="fa fa-envelope-o"></i> <a href="#">${users[i].email}</a></p>
						   </div>
						   <div>  <button type="button" class="form-control" id="cf-submit" name="submit" onclick="takeAppointement(${users[i].id})">make an appointement </button></div>
						
					  </div>

			</div>
	   </div>` ;
	   x=x+1
		} 

	} 
	
	
} else{
	for (let i = 0; i < users.length; i++) {
		if ((users[i].specialty == searchSpeciality && searchGouvernorat == ""  && users[i].role == "doctor") ||
			(users[i].governorat == searchGouvernorat && searchSpeciality == "" &&  users[i].role == "doctor") ||
			(users[i].specialty == searchSpeciality && users[i].governorat == searchGouvernorat && users[i].role == "doctor")) {
			doctorCart += ` <div class="col-md-4 col-sm-6">
			<div class="team-thumb wow fadeInUp" data-wow-delay="0.2s">
				 <img src="images/team-image1.jpg" class="img-responsive" alt="">

					  <div class="team-info">
						   <h3>${users[i].firstName}${users[i].lastName}</h3>
						   <p>${users[i].address}</p>
						   <div class="team-contact-info">
								<p><i class="fa fa-phone"></i> ${users[i].tel}</p>
								<p><i class="fa fa-envelope-o"></i> <a href="#">${users[i].email}</a></p>
						   </div>
						   <ul class="social-icon">
								<li><a href="#" class="fa fa-linkedin-square">Sign Up</a></li>
								<li><a href="login.html" class="fa fa-envelope-o"></a> Login</li>
						   </ul>
					  </div>

			</div>
	   </div>`
	   x=x+1
		} 

	}



}
	document.getElementById("cartDoctor").innerHTML = doctorCart;
	if (x==0) {
		document.getElementById("noResult").innerHTML = "No Result"
		
	}
}

 function takeAppointement(id) {
localStorage.setItem("idDoc",id)
location.replace("appointment.html")


 }





 function docValidation(){ var users= JSON.parse(localStorage.getItem("users") || "[]");
   
 var docValidationTable = `
 <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">first Name</th>
      <th scope="col"> last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
	  <th scope="col">Speciality</th>
	  <th scope="col"> Address</th>
	  <th scope="col"><th>
    </tr>
  </thead>
  <tbody>`

  for (let i = 0; i < users.length; i++) { if ((users[i].role== "doctor")&&(users[i].statut=="Notconfirmed")) {
        
  
	docValidationTable = docValidationTable + `   <tr>
<th scope="row">${users[i].id}</th>
<td>${users[i].firstName}</td>
<td>${users[i].lastName}</td>
<td>${users[i].email}</td>
<td>${users[i].tel}</td>
<td>${users[i].specialty}</td>
<td>${users[i].address}</td>

<td> <button class="btn btn-danger" onclick="deleteObject(${users[i].id})">Delete</button> 
<button class="btn btn-warning" onclick="Confirm(${users[i].id})">Confirm</button>

</td>

</tr>     `
docValidationTable=docValidationTable+`</tbody> </table>`


}}
document.getElementById("docValidationTable").innerHTML=docValidationTable



}
   function  showUsers(){
	var users= JSON.parse(localStorage.getItem("users") || "[]");
   
    var tableUsers =   `
	<table class="table">
	 <thead class="thead-dark">
	   <tr>
		 <th scope="col">first Name</th>
		 <th scope="col"> last Name</th>
		 <th scope="col">Email</th>
		 <th scope="col">Phone Number</th>
		 <th scope="col">Role</th>
		 <th scope="col"> Action</th>
		 
	   </tr>
	 </thead>
	 <tbody>`
	
	
	
	
	
	
	
	
	
	for (let i = 0; i < users.length; i++) { if ((users[i].statut=="Confirmed")||(users[i].role=="patient")) {
        
  
		tableUsers = tableUsers + ` 
		  <tr>
   
  <td>${users[i].firstName}</td>
  <td>${users[i].lastName}</td>
   <td>${users[i].email}</td>
   <td>${users[i].tel}</td>
   <th scope="row">${users[i].role}</th>
   
   <td> <button class="btn btn-danger" onclick="deleteObject(${users[i].id})">Delete</button> 
  
   
   </td>

 </tr>     `


}

	}
	tableUsers +=` </tbody ></table>`;
	console.log(tableUsers);

	
	document.getElementById("tableUsers").innerHTML=tableUsers

}
function deleteObject(id) {
	var users= JSON.parse(localStorage.getItem("users") || "[]");

	for (let i = 0; i < users.length; i++) {
		if (id == users[i].id) {
			users.splice(i, 1);
			break;
		}


	}
	localStorage.setItem("users", JSON.stringify(users));
	location.reload;

} 

function Confirm (id) {
   
	var users= JSON.parse(localStorage.getItem("users") || "[]");
	
	for (let i = 0; i < users.length; i++) {
		if (users[i].id == id) {
			users[i].statut = "Confirmed";
			break;
		}            
	}
	
	localStorage.setItem("users", JSON.stringify(users));
}
  
function searchId(id, Key) {
	var objects = JSON.parse(localStorage.getItem(Key) || ("[]"));
	var object;
	for (let i = 0; i < objects.length; i++) {
		if (objects[i].id == id) {
			object = objects[i]

		}
	}

	return object;

}

function makeAppointment(){
	var appointments= JSON.parse(localStorage.getItem("appointments") || "[]");
	console.log(appointments);
	 var idDoc=JSON.parse(localStorage.getItem("idDoc"));
	 console.log("idDoc",idDoc);
	 var idPatient=JSON.parse(localStorage.getItem("idUserfound")) ;
	 
	
	var date=document.getElementById("dateAppointment").value ;
	var telPatient=document.getElementById("tel").value  ;
	var emailPatient=document.getElementById("email").value  ;
	var messagePatient=document.getElementById("message").value ;
	
	var namePatient=document.getElementById("namePatient").value ;
	var idAppointment= generateId(appointments) ;

	var appointment= {
		idDoc: idDoc ,
		idPatient:idPatient,
		date:date,
		namePatient:namePatient,
		emailPatient:emailPatient,
		messagePatient:messagePatient,
		telPatient:telPatient,
		statut:"notConfirmed",
		id: idAppointment

	}
	console.log(appointment);
	localStorage.setItem("appointment", JSON.stringify(appointment))
	appointments.push(appointment)
	localStorage.setItem("appointments", JSON.stringify(appointments))
	// location.replace("appointment.html")


	
}
function generateId(T) {
	var max = 0;
	if (T.length == 0) {
		return (max + 1)

	} else {
		for (let i = 0; i < T.length; i++) {
			if (T[i].id > max) {
				max = T[i].id
			}
		}
	}

	return max + 1
}

function appointementsList() {
	var appointments= JSON.parse(localStorage.getItem("appointments") || "[]");
	var idPatient=JSON.parse(localStorage.getItem("idUserfound")) ;


	var  appointmentTable=  `  <h3> Confirmed appointemens</h3>
	
	<table class="table">
	 <thead class="thead-dark">
	   <tr>
		 <th scope="col"> Name</th>
		 <th scope="col">Phone Number</th>
		 <th scope="col">Date</th>
		 <th scope="col"> Action</th>
		 
	   </tr>
	 </thead>
	 <tbody>`
	
	for (let i = 0; i < appointments.length; i++) {
		if ((appointments[i].idPatient==idPatient)&&(appointments[i].statut=="Confirmed")) {
			var doctor= searchId(appointments[i].idDoc,"users")
			appointmentTable+=  `
			<tr>
			<th scope="col">${doctor.firstName} ${doctor.lastName}</th>
			<th scope="col">${doctor.tel} </th>
			<th scope="col">${appointments[i].date}
			<button class="btn btn-primary" onclick="changeDate(${appointments[i].id})">change the date </button>
			</th>
			<th > <button class="btn btn-danger" onclick="deleteObject(${appointments[i].id})"> delete</button></th>
			
			
			</tr>`

			
		}
		 
	}
	appointmentTable +=` </tbody></table>`
	document.getElementById("appointmentTable").innerHTML = appointmentTable
 
	var  appointmentNotConfirmedTable=  `  <h3> Not Confirmed Table </h3>
	
	
	<table class="table">
	 <thead class="thead-dark">
	   <tr>
		 <th scope="col"> Name</th>
		 <th scope="col">Phone Number</th>
		 <th scope="col">Date</th>
		 <th scope="col"> Action</th>
		 
	   </tr>
	 </thead>
	 <tbody>`
	 for (let i = 0; i < appointments.length; i++) {
		
		if ((appointments[i].idPatient==idPatient)&&(appointments[i].statut=="notConfirmed")) {
			var doctor= searchId(appointments[i].idDoc,"users")
			appointmentTable+=  `
			<tr>
			<th scope="col">${doctor.firstName} ${doctor.lastName}</th>
			<th scope="col">${doctor.tel} </th>
			<th scope="col">${appointments[i].date}
			<button class="btn btn-primary" onclick="changeDate(${appointments[i]})">change the date </button>
			</th>
			<th > <button class="btn btn-danger" onclick="deleteObject(${appointments[i].id})"> delete</button></th>
			
			
			</tr>`

			
		}
		 
	}
	
	appointmentNotConfirmedTable+=` </tbody></table>`
	document.getElementById("appointmentNotConfirmedTable").innerHTML = appointmentNotConfirmedTable

 }
 function appointementsDocList() {
		var appointments= JSON.parse(localStorage.getItem("appointments") || "[]");
		var idDoc=JSON.parse(localStorage.getItem("idUserfound")) ;
	
	
		var  appointmentTable=  `  <h3> Confirmed appointements</h3>
		
		<table class="table">
		 <thead class="thead-dark">
		   <tr>
			 <th scope="col"> Name</th>
			 <th scope="col">Phone Number</th>
			 <th scope="col">Date</th>
			 
			 
		   </tr>
		 </thead>
		 <tbody>`
		
		for (let i = 0; i < appointments.length; i++) {
			if ((appointments[i].idPatient==idPatient)&&(appointments[i].statut=="Confirmed")) {
				var patient= searchId(appointments[i].idPatient,"users")
				appointmentTable += `
				<tr>
				<th scope="col">${patient.firstName} ${patient.lastName}</th>
				<th scope="col">${patient.tel} </th>
				<th scope="col">${appointments[i].date }</th>
				
				
				</tr>`
	
				
			}
			 
		}
		appointmentTable +=` </tbody> </table>`

		document.getElementById("appointmentTable").innerHTML = appointmentTable
	 
		var  appointmentNotConfirmedTable=  `  <h3> Not Confirmed Table </h3>
		
		
		<table class="table">
		 <thead class="thead-dark">
		   <tr>
			 <th scope="col"> Name</th>
			 <th scope="col">Phone Number</th>
			 <th scope="col">Date</th>
			 <th scope="col"> Action</th>
			 
		   </tr>
		 </thead>
		 <tbody>`
		 for (let i = 0; i < appointments.length; i++) {
			
			if ((appointments[i].idPatient==idPatient)&&(appointments[i].statut=="notConfirmed")) {
				var patient= searchId(appointments[i].idPatient,"users")
				 appointmentTable+=  `
				<tr>
				<th scope="col">${patient.firstName} ${doctor.lastName}</th>
				<th scope="col">${patient.tel} </th>
				<th scope="col">${appointments[i].date}
				</th>
				<th > <button class="btn btn-primary" onclick="confirm (${appointments[i].id})"> Confirm</button>
				<button class="btn btn-danger" onclick="deleteObject(${appointments[i].id})"> delete</button></th>
				
				
				</tr>`
	
				
			}
			 
		}
		
		appointmentNotConfirmedTable+=` </tbody></table>`
		document.getElementById("appointmentNotConfirmedTable").innerHTML = appointmentNotConfirmedTable
	
	 







  }
			
  function changDate(appointment) {

	
	
	
	var editdat=`
    <div class="login_form_inner">
						<h3>changer la date</h3>
						div class="row login_form"  id="contactForm" novalidate="novalidate">
							<div class="col-md-12 form-group">
								
							<input type="tel" class="form-control" id="newDate" name="name" placeholder="new date" onfocus="this.placeholder = ''" onblur="this.placeholder = 'newdate'" value="${appointment.date}" >
							<i class="fa fa-calendar" aria-hidden="true"></i>
							</div>
							
							
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="primary-btn" onclick="(Editdate(${appointment.id}))"> Edit</button>
								
							</div>
						</div>
					</div>
					</div>
    `
    document.getElementById("editdat").innerHTML=editdat }

	function Editdate(id) {
		var appointments= JSON.parse(localStorage.getItem("appointments") || "[]");
		var newDate=document.getElementById("newDate").value ;
		for (let i = 0; i < RenduVOUS.length; i++) {
			if (id==appointments.id) {
				appointments.date=newDate ;
				appointments.statut="notConfirmed" ;
				break ;
				
			}
			
		}
		localStorage.setItem("appointments", JSON.stringify(appointments))

	}
    

function displayNav() {
    var connectedUser = JSON.parse(localStorage.getItem("connectedUser") || "[]")
    var nav = ``
    if (connectedUser == false) {
        nav =  `<section class="navbar navbar-default navbar-static-top" role="navigation">
		<div class="container">

			 <div class="navbar-header">
				  <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					   <span class="icon icon-bar"></span>
					   <span class="icon icon-bar"></span>
					   <span class="icon icon-bar"></span>
				  </button>

				  <!-- lOGO TEXT HERE -->
				  <a href="index.html" class="navbar-brand"><i class="fa fa-h-square"></i>ealth Center</a>
			 </div>

			 <!-- MENU LINKS -->
			 <div class="collapse navbar-collapse">
				  <ul class="nav navbar-nav navbar-right">
					   <li><a href="#top" class="smoothScroll">Home</a></li>
					   <li><a href="#about" class="smoothScroll">About Us</a></li>
					   <li><a href="#team" class="smoothScroll">Doctors</a></li>
					   <li><a href="#news" class="smoothScroll">News</a></li>
					   <li><a href="#google-map" class="smoothScroll">Contact</a></li>
					   <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="department.html" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sign Up <i class="icofont-thin-down"></i></a>
                            <ul class="dropdown-menu" aria-labelledby="dropdown02">
                                <li><a class="dropdown-item" href="signupMed.html">Doctor</a></li>
                                <li><a class="dropdown-item" href="signupPatient.html">Patient</a></li>
                            </ul>
                          </li>
                            
						  <li class="appointment-btn"><a href="#appointment">Login</a></li>
				  </ul>
			 </div>

		</div>
   </section>`
    } else {
        if (connectedUser.role == "admin") {
			nav =  `<section class="navbar navbar-default navbar-static-top" role="navigation">
			<div class="container">
	
				 <div class="navbar-header">
					  <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						   <span class="icon icon-bar"></span>
						   <span class="icon icon-bar"></span>
						   <span class="icon icon-bar"></span>
					  </button>
	
					  <!-- lOGO TEXT HERE -->
					  <a href="index.html" class="navbar-brand"><i class="fa fa-h-square"></i>ealth Center</a>
				 </div>
	
				 <!-- MENU LINKS -->
				 <div class="collapse navbar-collapse">
					  <ul class="nav navbar-nav navbar-right">
						   <li><a href="index.html" class="smoothScroll">Home</a></li>
						   
						   <li><a href="#news" class="smoothScroll">News</a></li>
						   <li><a href="dashboard.html" class="smoothScroll">Dashboard</a></li>
						   <li><a href="search.html" class="smoothScroll">Search</a></li>
						   <li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="department.html" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sign Up <i class="icofont-thin-down"></i></a>
								
							  </li>
								
							  <li class="appointment-btn" onclick="logout()"><a href="#appointment">LogOut</a></li>
					  </ul>
				 </div>
	
			</div>
	   </section>`
        } else if (connectedUser.role == "client") {
            nav = `  <nav class="navbar navbar-expand-lg navbar-light main_box">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                    <ul class="nav navbar-nav menu_nav ml-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item submenu dropdown active">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                aria-haspopup="true" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu">
                               
                                <li class="nav-item"><a class="nav-link" href="cart.html">Shopping Cart</a></li>
                                <li class="nav-item"><a class="nav-link" href="confirmation.html">Confirmation</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item submenu dropdown">
                            <a href="blog.html" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                aria-haspopup="true" aria-expanded="false">Blog</a>
                            <ul class="dropdown-menu">
                                <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="nav-item" onclick= "logout()" ><span class="ti-bag">Log Out</span></li>
                        <li class="nav-item">
                            <button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`




        }
    }
    document.getElementById("header").innerHTML = nav;

} 
function  logout(){
	localStorage.removeItem("connectituser") ;
	location.replace("index.html")
	
   }