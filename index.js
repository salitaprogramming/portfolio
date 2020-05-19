function openNav() {
	document.getElementById('menu').style.width = '100%';
}

function closeNav() {
	document.getElementById('menu').removeAttribute("style");
}

function validateForm(){
	// retrieving required fields from form
	const name = document.sendMessage.name.value;
	const email = document.sendMessage.email.value;
	const subject = document.sendMessage.subject.value;
	const message = document.sendMessage.message.value;

	// prompting user to fill empty section if required fields are missing
	if(name == "" || email == "" || message == ""){
	  alert("Please fill in all sections!");
	  return false;
	}

	// checking if name is valid
	const regexNum = /\d/g;
	const numCheck = regexNum.test(name);
	const lengthCheck = name.length > 50;

	// prompting user to re-enter name if it contains digits and is invalid
	if(numCheck || lengthCheck){
	  alert("Enter a valid name! Name must be less than 50 characters and must not contain digits");
	  document.sendMessage.name.focus();
	  return false;
	}

	// checking to see if email is valid
	const validEmail = validateEmail();
	
	if (!validEmail) {
		alert("Please enter a valid email!");
		return false;		
	}

	return true;
}

function validateEmail(){
	const email = document.sendMessage.email.value;
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('menuBar').addEventListener('click',openNav);
	document.getElementById('closebtn').addEventListener('click',closeNav);
	
	function myFunction(x) {
	  if (x.matches) { // If media query matches
		document.getElementById('menu').removeAttribute("style");
		// adding click events for links
		let links = document.getElementsByTagName('a');
		for (let i = 0; i < links.length; i++) {
			links[i].addEventListener('click',closeNav);
		}
	  }
	}

	let x = window.matchMedia("(max-width: 996px)");
	myFunction(x); // Call listener function at run time
	x.addListener(myFunction); // Attach listener function on state changes

},false);
